
import React from 'react'
import { Button } from "react-bootstrap"
import { auth, provider } from '../helpers'
import { useState } from 'react'
export const HomePage = ({ ...props }) => {
  const [user, loginUser] = useState({ profile: null })
  user.profile = JSON.parse(localStorage.getItem('user'))
  const logout = () => {
    localStorage.setItem('user', null)
    loginUser({ profile: null })
  }
  const login = () => {
    auth.signInWithPopup(provider).then((result) => {
      localStorage.setItem('user', JSON.stringify(result.user))
      loginUser({ profile: result.user })
    })
  }
  if (user.profile) {
    return (
      <div style={{ color: 'black' }}>
        {`Welcome ${user.profile.displayName} (${user.profile.email}) - uid" ${user.profile.uid}`}
        <br />
        <Button onClick={() => logout()}>Logout</Button>
      </div>
    )
  }
  return (
    <div style={{ color: 'black' }}>
      <Button onClick={() => login()}>Login with Google</Button>
    </div>)
}
export default HomePage
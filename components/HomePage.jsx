
import React from 'react'
import { Button } from "react-bootstrap"
import { auth, provider, db, firebase } from '../helpers'
import { useState } from 'react'
export const HomePage = ({ ...props }) => {
  const [user, loginUser] = useState({ profile: null })
  const [ready, loading] = useState(false)
  const logout = () => {
    auth.signOut().then(() => {
      loginUser({ profile: null })
    }).catch((error) => {
      console.log(error)
    });
  }
  auth.onAuthStateChanged((_user) => {
    if (_user && !user.profile) {
      loginUser({ profile: _user })
    }
    if (!ready) {
      loading(true)
    }
  })
  const storeUser = user => {
    db.collection('users').doc(user.uid).set({
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      metadata: {
        creationTime: user.metadata.creationTime,
        lastSignInTime: user.metadata.lastSignInTime,
      },
    })
  }
  const login = () => {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
      auth.signInWithPopup(provider).then((result) => {
        storeUser(result.user)
        loginUser({ profile: result.user })
      })
    }).catch(reason => console.log(reason))
  }
  if (!ready) return (<div>...</div>)
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
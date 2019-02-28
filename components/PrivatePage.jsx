
import React from 'react'
import {auth} from '../helpers'
export const PrivatePage = ({ ...props }) => {
  let user = {
    profile: auth.currentUser
  }
  return (
    <div style={{ color: 'black' }}>
      {`Welcome to the private page ${user.profile.displayName} (${user.profile.email}) - uid" ${user.profile.uid}`}
    </div>
  )
}
export default PrivatePage
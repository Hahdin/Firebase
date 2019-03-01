
import React from 'react'
export const PrivatePage = ({ ...props }) => {
  let user = {
    profile: JSON.parse(localStorage.getItem('user'))
  }
  return (
    <div style={{ color: 'black' }}>
      {`Welcome to the private page ${user.profile.displayName} (${user.profile.email}) - uid" ${user.profile.uid}`}
    </div>
  )
}
export default PrivatePage
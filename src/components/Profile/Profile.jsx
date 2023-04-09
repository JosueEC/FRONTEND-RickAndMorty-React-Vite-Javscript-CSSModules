import { React, useContext } from 'react'
import UserContext from '../../context/User/UserContext'

export default function Profile () {
  const { selectedUser } = useContext(UserContext)

  return (
    <div>
      {selectedUser
        ? (
          <div>
            <img
              src={selectedUser.image}
              alt='user selected'
              style={{ width: 180 }}
            />
            <h1>{`${selectedUser.name} ${selectedUser.gender}`}</h1>
            <h3>Status: {selectedUser.status}</h3>
          </div>
          )
        : (
          <div>No User selected</div>
          )}
    </div>
  )
}

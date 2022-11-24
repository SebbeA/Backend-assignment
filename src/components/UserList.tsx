import React, { useEffect } from 'react'
// * IUserContext is the contract and UserContext is the object
import { IUserContext, UserContext } from '../contexts/userContext'
import { User } from '../models/userModel'

const UserList = () => {
    const { users, getAll } = React.useContext(UserContext) as IUserContext

    useEffect(() => {
        getAll()

    }, [getAll])

    return (
        <>
        <h3 className="display-6 mb-4">List of Users</h3>
            {
                users.map((user: User) => (<div key={user.id} className="mb-3">{user.firstName} {user.lastName} </div>))
            }
        </>
    )
}

export default UserList
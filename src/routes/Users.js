import React from 'react'
import UsersSearch from '../components/UsersSearch'
import UsersList from '../components/UsersList'
import UsersModal from '../components/UsersModal'
function Users(){
    const usersSearchProps = {}
    const usersListProps = {}
    const userModalProps = {}
    return(
        <div>User Route Component
            <UsersSearch {...usersSearchProps}/>
            <UsersList {...usersListProps} />
            <UsersModal {...userModalProps}/>
        </div>
    )
}
export default Users
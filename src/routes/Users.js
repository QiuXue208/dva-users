import React from 'react'
import UsersSearch from '../components/UsersSearch'
import UsersList from '../components/UsersList'
import UsersModal from '../components/UsersModal'
function Users(){
    return(
        <div>User Route Component
            <UsersSearch />
            <UsersList />
            <UsersModal />
        </div>
    )
}
export default Users
import React from 'react'
import UsersSearch from '../components/UsersSearch'
import UsersList from '../components/UsersList'
import UsersModal from '../components/UsersModal'
function Users(){
    const usersSearchProps = {}
    const usersListProps = {
         dataSource:[
            {
                key:'1',
                name:'郭杰',
                age:'44',
                address:'华北',
            },
            {
                key:'2',
                name:'郭杰',
                age:'44',
                address:'华北',
            }
        ]
    }
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
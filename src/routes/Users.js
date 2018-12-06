import React from 'react'
import UsersSearch from '../components/UsersSearch'
import UsersList from '../components/UsersList'
import UsersModal from '../components/UsersModal'
import {connect} from 'dva'

function Users(props){
    const usersSearchProps = {}
    const usersListProps = {
         dataSource:props.list
    }
    const userModalProps = {}
    console.log({...usersListProps})
    return(
        <div>User Route Component
            <UsersSearch {...usersSearchProps}/>
            <UsersList {...usersListProps} />
            <UsersModal {...userModalProps}/>
        </div>
    )
}
function mapStateToProps(state){
    return {list:state.users}
}
export default connect(mapStateToProps)(Users)
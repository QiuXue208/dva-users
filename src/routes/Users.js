import React from 'react'
import UsersSearch from '../components/UsersSearch'
import UsersList from '../components/UsersList'
import UsersModal from '../components/UsersModal'
import {connect} from 'dva'

function Users(props){
    const usersListProps = {
        dataSource:props.list
    }
    function handleDelete(key){
        console.log(1)
        props.dispatch({
            type:'users/delete',
            payload:key
        })
        console.log(2)
    }
    return(
        <div>User Route Component
            <UsersSearch/>
            <UsersList onDelete={handleDelete} {...usersListProps}/>
            <UsersModal/>
        </div>
    )
}
function mapStateToProps(state){
    return {list:state.users}
}
export default connect(mapStateToProps)(Users)
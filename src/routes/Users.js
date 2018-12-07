import React from 'react'
import UsersSearch from '../components/UsersSearch'
import UsersList from '../components/UsersList'
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
        <div>
            <UsersSearch/>
            <UsersList onDelete={handleDelete} {...usersListProps}/>
        </div>
    )
}
function mapStateToProps(state){
    return {list:state.users}
}
export default connect(mapStateToProps)(Users)
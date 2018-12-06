import React from 'react';
import {Popconfirm,Table} from 'antd'

function UsersList({dataSource}){
    const columns = [
        {
            title:'Name',
            dataIndex:'name',
            key:'name',
            render:(text)=><a href="#">{text}</a>
        },
        {
            title:'Age',
            dataIndex:'age',
            key:'age'
        },
        {
            title:'Address',
            dataIndex:'address',
            key:'address'
        },
        {
            title:'Action',
            dataIndex:'action',
            key:'action',
            render:()=>{
                return(
                    <p>
                        <a href="#">编辑</a>
                        &nbsp;
                        <Popconfirm title="Delete?" onConfirm={()=>{}}>
                            <a href="#">删除</a>
                        </Popconfirm>
                    </p>
                )
            }
        }
    ]
  return (
    <div>Users List
        <Table columns={columns} dataSource={dataSource.list}></Table>
    </div>
  )
}

export default UsersList
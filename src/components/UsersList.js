import React from 'react';
import {Button,Popconfirm,Table} from 'antd'

function UsersList(props){
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
            render:(text,record,index)=>{
                return(
                    <p>
                        <Button>编辑</Button>
                        &nbsp;
                        <Popconfirm title="Delete?" onConfirm={()=>{props.onDelete(record.key)}}>
                            <Button>删除</Button>
                        </Popconfirm>
                    </p>
                )
            }
        }
    ]
  return (
    <div>
        <Table columns={columns} dataSource={props.dataSource.list}></Table>
    </div>
  )
}

export default UsersList
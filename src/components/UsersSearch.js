import React from 'react';
import {Button,Input,Menu,Dropdown,Icon} from 'antd'
import styles from './UsersSearch.css'
function UsersSearch(){
  const menu=(
    <Menu>
        <Menu.Item>
          <a href="#">张三</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">李四</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">王五</a>
        </Menu.Item>
    </Menu>
  )
  return (
    <div className={styles.search}>
      <Button>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              名字 <Icon type="down" />
            </a>
          </Dropdown>
      </Button>
      <Input className={styles.input} placeholder="please input name" />
      <Button type="primary" >搜索</Button>
      <Button className={styles.add}>添加</Button>
    </div>
  )
}

export default UsersSearch

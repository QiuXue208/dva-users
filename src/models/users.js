import {hashHistory} from 'dva/router'

export default{
    namespace:'users',
    state:{
        list:[
            {
                key:1,
                name:'张三',
                address:'上海',
                age:18
            },
            {
                key:2,
                name:'李四',
                address:'南京',
                age:17
            },
            {
                key:3,
                name:'王五',
                address:'重庆',
                age:20
            }
        ]
    },
}
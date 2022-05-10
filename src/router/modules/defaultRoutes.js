
export default [
    {
        name:"home",
        path:"/",
        component:()=>import("@/views/home"),
        meta:{
            title:'lang.router.home',
            keepAlive:false
        },
        children:[
            
        ]
    },
    {
        name:"detail",
        path:"/detail",
        component:()=>import("@/views/home/detail"),
        meta:{
            title:"lang.router.detail",
            keepAlive:false
        },
        children:[

        ]
    },
    {
        name:"test",
        path:"/test",
        component:()=>import("@/views/test"),
        meta:{
            title:"lang.router.test",
            keepAlive:false
        },
        children:[]
    }
]
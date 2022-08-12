import index from '../../components/index'
import first from '../../components/first'
import my from '../../components/my'
import mine from '../../components/mine'
import list from '../../components/list'
import type from '../../components/type'
import login from '../../components/login'
import VueRouter from 'vue-router'
var router=new VueRouter({
    routes:[
        {
            path:'/',
            component:first,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/type',
                    component:type
                },
                {
                    path:'/mine',
                    component:mine
                },
            
            ],
            redirect:'/index'
        },
       {
        path:'/my',
        component:login
       },
       {
        path:'/list',
        component:list
       },
        {
            path:'/*',
            redirect:'/index'
        }
    ]
})
export default router;
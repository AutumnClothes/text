import main from '@/pages/main'
export const loginRoute = {
  path: '/',
  name: 'login',
  meta: {
    title: '登录'
  },
  component: resolve => { require(['@/pages/login'], resolve) }
}
export const mainRoutes = {
        path: '/main',
        name: 'main',
        meta: {
            title: '秋衣'
          },
        component: main,
        redirect: {
            name: 'home'
        }, 
        children: [
            {
              path: 'home',
              name: 'home',
              meta: {
                title: '首页',
                access: 1,
                icon: 'ios-list-outline'
              },
              component: resolve => { require(['@/pages/home'], resolve) }
            },
        ]  
}
export const menuRoutes = [
    {
        path: '/home',
        name: 'home',
        meta:{
            title:'表格',
            icon:'ios-list-outline'
        },
        component:main,
        children: [{
                path: '/home/tableone',
                name: 'tableone',
                meta: {
                    title: '基础X表格',
                    icon:'pound'
                },
                component: resolve => { require(['@/content/table.1'], resolve) }
            },
            {
                path: '/tabletwo',
                name: 'tabletwo',
                meta: {
                    title: '表二',
                    icon:'pound'
                },
                component: resolve => { require(['@/content/table.2'], resolve) }
            },
            {
                path: '/tablethree',
                name: 'tablethree',
                meta: {
                    title: '表三',
                    icon:'pound'
                },
                component: resolve => { require(['@/content/table.3'], resolve) }
            },
            {
                path: '/tablefour',
                name: 'tablefour',
                meta: {
                    title: '表四',
                    icon:'pound'
                },
                component: resolve => { require(['@/content/table.4'], resolve) }
            },
        ]
    }, 
]
const routers = [
    loginRoute,
    mainRoutes,
    ...menuRoutes,
]     
export default routers 
  
  
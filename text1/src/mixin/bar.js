const mxixin = {
    data () {
        return  {
            mianbaoArr: [
                {
                    path: 'home',
                    name: 'home',
                    meta: {
                        title: '首页'
                    },
                    children: [
                        {
                          path: 'home',
                          name: 'home',
                          meta: {
                            title: '首页',
                            access: 1,
                            icon: ''
                          },
                          component: resolve => { require(['@/pages/home'], resolve) }
                        },
                    ]  
                }
            ]
        }
    },
    methods: {
        
    }
}
export default mixin
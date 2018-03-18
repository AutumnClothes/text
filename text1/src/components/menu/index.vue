<template>
    <Menu :active-name="currentPageName" :open-names="openedSubmenuArr" :theme="theme" width="auto" :accordion="accordion" @on-select="menuSelect">
        <Submenu v-for="item in menuData" :name="item.name" :key="item.name">
            <template slot="title">
                <Icon :type="item.meta.icon"></Icon>
                {{item.meta.title}}
            </template>
            <MenuItem v-for="child in item.children" :name="child.name" :key="child.name">
                <Icon :type="child.meta.icon"></Icon>
                {{child.meta.title}}
            </MenuItem>
        </Submenu>
    </Menu>
</template>

<script>
import { menuRoutes } from '@/router/routes'
export default {
    // props: {
    //   menuList: Array
    // },
//menu主题
    data(){
        return{
            theme: 'dark',
            accordion:true ,//开启手风琴模式
            menuData:[],
        }
    },
    computed: {//实时计算
        currentPageName () {
            return this.$route.name
        },
        openedSubmenuArr () {
            return this.$route.openedSubmenuArr
        }
    },
//点击导航控制内容展示
    methods: {//方法
        menuSelect (name) {
            let vm = this
            // //content路由跳转
            vm.$router.push({name: name})
            window.document.title = name 
        }
    },
//观测
    watch:{
        $route (to){
            sessionStorage.openedSubmenuArr = to.name
        }
    },
    // 在mounted钩子中将路由数据处理成符合menu菜单渲染的数据
    mounted () {
        // 查看有没有获取到路由数据
        //console.log(menuRoutes)
        //把数据赋予menuData，
        this.menuData = menuRoutes
    }
}
</script>

<style scoped>
    
</style>

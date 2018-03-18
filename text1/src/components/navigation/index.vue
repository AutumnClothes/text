<template>
  <div>
    <div class="navbr" style>
      <Breadcrumb separator="">
        <BreadcrumbItem v-for="item in mianbaoArr" :key="item.meta.title" :to="{name: item.name}">
          <Icon :type="item.meta.icon"></Icon>
          {{item.meta.title}}
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="navbutton">
      <Button type="text">
          <Icon type="arrow-expand" size="25"></Icon>
      </button>
      <Button type="text">
          <Icon type="locked" size="25"></Icon>
      </button>
      <Button type="text">
          <Icon type="gear-a" size="25"></Icon>
      </button>
      <Button type="text">
          <Icon type="log-out" size="25"></Icon>
      </button>
    </div>
  </div>
</template>

<script>
import { menuRoutes } from '@/router/routes'
export default {
  props: {

  },
  data () {
    return {
      mianbaoArr: [{
        name: 'home',
        meta: {
          title: '首页',
          icon: 'ios-home-outline'
        }
      }
    ],
      obj: {
        name: 'home',
        meta: {
          title: '首页',
          icon: 'ios-home-outline'
        }
      },
    }
  },
  methods: {
    getPath(){
      sessionStorage.name  = this.$route.name;
      this.setMianbao()
    },
    setMianbao () {
      let setArr = []
      let faRouter = {
        name: '',
        meta: {
          title: '',
        }
      }
      let sonRouter = {
        name: '',
        meta: {
          title: '',
        }
      }
      let sonRouterName = sessionStorage.name
      menuRoutes.forEach(item=>{                      //遍历menuRoutes
        item.children.forEach(child=>{                //遍历其子级
          if (child.name==sonRouterName) {            //dengxiad
            faRouter.name = item.name                 //赋值
            faRouter.meta.title = item.meta.title
            faRouter.meta.icon = item.meta.icon
            sonRouter.name = child.name
            sonRouter.meta.title = child.meta.title
            sonRouter.meta.icon = child.meta.icon
          }
        })
      })
      setArr = [
        this.obj,
        faRouter,
        sonRouter
      ]
      this.mianbaoArr = setArr
    }
  },
  watch:{
        "$route":"getPath"  //获取当前路由
  },
}

</script>

<style scoped>
  .navbr{
    float: left;
  }
  .navbutton{
    float: right;
  }
</style>

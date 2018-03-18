<template>
  <div>
        <div class="menubar" :style="{left: hide ? '-200px' : '0'}">
            <img src="../../images/logo.jpg"  style="max-width:100%">
            <menubar></menubar>
        </div>
        <div>
            <div class="navigation" :style="{left: hide ? '0' : '200px'}">
                <div class="nav-butten">
                    <Button @click="hideclick" type="text">
                        <Icon type="navicon-round" size="32" :style="{transform: 'rotateZ(' + (this.hide ? '-90' : '0') + 'deg)'}"></Icon>
                    </button>
                </div>
                <navigation/>
            </div>
            <div class="content" :style="{left: hide ? '0' : '200px'}">
                <router-view></router-view>
            </div>
            <div class="copyright" :style="{left:hide?0:'200px'}">
                Copyright © 秋衣制造版权所有
            </div>
        </div>
  </div>
</template>

<script>
import menubar from '@/components/menu';
import navigation from '@/components/navigation';
export default {
    components: {
        menubar,
        navigation,
    },
    data(){
        return{
            hide:false
        }
    },
    methods:{
        hideclick(){
        this.hide=!this.hide
        }
    }
}
</script>
    
<style>
    .menubar{
        height: 100%;
        width: 200px;
        top:0;
        background: rgb(73, 80, 96);
        max-width: 80%;
        position: absolute;
        transition: left .3s;
    }
    .navigation{
        line-height: 60px; 
        position: absolute;
        /* background: #fff; */
        left:200px;
        right: 0;
        height: 60px;
        transition: left .3s;
        box-shadow: 0px 3px 3px rgb(219, 219, 219);
        z-index:10;
    }
    .nav-butten{
        float: left;
    }
    .nav-butten:link{
        transform: rotate(0deg);
    }
    .nav-butten:visited{
        transform: rotate(90deg);
    }
    .content{
        position: absolute;
        top:60px;
        left:200px;
        bottom: 60px;
        right:0;
        background: #f5f7f9;
    }
    .copyright{
        position: absolute;
        height: 60px;
        bottom: 0;
        right: 0;
        left: 200px;
        text-align: center;
        line-height: 60px;
        background: #f5f7f9;
        transition: left .3s;
    }
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body,html{
    width: 100%;
    height: 100%;
    margin:0;
    overflow: hidden;
  }
  #app {
    height: 100%;
    width: 100%;
  }
</style>

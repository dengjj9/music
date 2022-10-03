<template>

  <div>
 <!--路由占位符 在用户访问相应组件时 组件渲染至该处-->
  <router-view></router-view>
  </div>

</template>

<script>
import { provide } from '@vue/runtime-core'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
  
  },
  
}
</script>

<style>

</style>

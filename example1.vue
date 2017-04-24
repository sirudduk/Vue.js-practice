<style>

</style>


<template>
  <div>
    <app-title></app-title>
    <app-side></app-side>
  </div>
</template>

<script>
import appTitle from './components/app-header.vue'
import appSide from './components/app-side-menu.vue'

const bigDoor = { template: '<h2>쇼핑몰에 오신걸 환영합니다.</h2>' }

const routes = [
  { pate: '/big-door', conponent: bigDoor }
]

const router = new VueRouter({
  routes
})
  export default {
    components: {
      "app-title": appTitle,
      "app-side": appSide
    }
  }

</script>
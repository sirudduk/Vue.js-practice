<style lang='scss'>
  .side-menu {
    border: 2px solid green;
    width: 20%;
    height: 500px;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>
<template lang='html'>
  <div>
    <div class="side-menu">
      <router-link class="left" to="/big-door">대문</router-link>
      <router-link class="left" to="/product-list">상품목록</router-link>
      <router-link class="left" to="/cart">장바구니</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>


export default {
  
}
</script>

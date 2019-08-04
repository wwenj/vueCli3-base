<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  naem: 'App',
  mounted () {
  }
}
</script>

<style>
@import 'style/reset.css';
#app{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>

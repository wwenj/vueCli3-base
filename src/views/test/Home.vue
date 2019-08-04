<template>
  <div class="home">
    test
    <p>在组件中直接写px单位，基于iphone6的750逻辑像素屏幕开发，会转换成vw单位做适配</p>
    <svg-icon icon-class="a"/>
  </div>
</template>

<script>
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height:100%;
  font-size:30px;
  p{
    width: 375px;
    // height:100px;
    border: 1px solid black;
  }
}
</style>

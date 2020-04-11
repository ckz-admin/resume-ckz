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

<style lang="less">

@import url('../static/css/normalize.min.css');
#app {
  overflow: hidden;
  font-family: 'Hiragino Sans GB','WenQuanYi Micro Hei','Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Microsoft YaHei', sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #12181f;
  @media screen and (max-width: 768px) {
    overflow: hidden;
    font-size: 10px;
  }
}
</style>

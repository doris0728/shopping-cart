<template>
  <div class="dom">
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
// import { BootstrpVue } from 'bootstrap-vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin:0;
  padding:0;
  border:0;
  overflow-x:hidden;
  width:100%;
}
</style>

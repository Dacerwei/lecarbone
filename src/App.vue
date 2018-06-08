<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
#app {
  background-color: white;
}
img {
  width: 100%;
}
</style>

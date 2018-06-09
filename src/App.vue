<template>
  <v-app id="app">
    <navigation-bar></navigation-bar>
    <router-view/>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    NavigationBar,
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

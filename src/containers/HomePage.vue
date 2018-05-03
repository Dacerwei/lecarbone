<template>
<v-app>
  <NavBar></NavBar>
  <Footer></Footer>
</v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default {
  data() {
    return {
      greet: 'hello this is lecarbone home page',
    };
  },
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>

</style>

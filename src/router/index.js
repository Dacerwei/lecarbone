import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/containers/HelloWorld';
import HomePage from '@/containers/HomePage';
import TokenSale from '@/containers/TokenSale';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/tokensale',
      name: 'TokenSale',
      component: TokenSale,
    },
  ],
});

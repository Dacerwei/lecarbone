import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/containers/HomePage';
import TokenSale from '@/containers/TokenSale';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
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

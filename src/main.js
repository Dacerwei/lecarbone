// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';
import VueScrollTo from 'vue-scrollto';
import App from './App';
import router from './router';
import zh from './i18n/zh';
import en from './i18n/en';

Vue.use(VueI18n);
Vue.use(Vuetify);
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
Vue.config.productionTip = false;
fontawesome.library.add(brands, faSpinner);

const messages = {
  en,
  zh,
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});


/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

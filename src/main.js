import Vue from 'vue'
import App from './App.vue'
import Mask from './VueMask.js';

Vue.use(Mask);

new Vue({
  el: 'body',
  components: { App }
})

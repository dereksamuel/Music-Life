import Vue from "vue";
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import App from "./App.vue";
import routes from "./router";

import EventBus from "./plugins/event-bus";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(EventBus);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

const router = new VueRouter({ routes, mode: 'history' });

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

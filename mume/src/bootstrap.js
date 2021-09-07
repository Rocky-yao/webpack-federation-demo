import Vue from 'vue';
import mume from './components/mune.vue';
import store from './store/index'
// import app from "core/store"
// console.log(app)
// store.registerModule('app',app.app)
// store.registerModule('app2',app.app2)
import debounce from "./components/debounce"
Vue.directive('debounce', debounce)
new Vue({
  store,
  render: h =>
    h(mume),
}).$mount('#dev-mume');

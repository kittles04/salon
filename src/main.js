import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import about from './components/About.vue';
import BlogPage from './components/BlogPage.vue';
import VideoPage from './components/VideoPage.vue';
import banner from './components/Banner.vue';
import VueRouter from 'vue-router';
import VueLoadImage from 'vue-load-image';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VueResource from 'vue-resource';
import axios from 'axios'





console.log(process);
Vue.prototype.$http = axios
Vue.use(VueResource)
Vue.use(VueRouter);
Vue.use(VueMaterial);

// if(process.env.filezilla == true){
//   //pretend picture saved elsewhere in filezilla
// }else{
//   const picture = require('../img/dog')
// }


const routes = [
  { path: '/', component: about},
  { path: '/blog', component: BlogPage},
  { path: '/video', component: VideoPage}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

Vue.component('banner', banner);


new Vue({
  el: '#app',
  router,
  render: function (h) { return h(App) },
})

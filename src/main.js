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


Vue.use(VueResource)
Vue.use(VueRouter);
Vue.use(VueMaterial);


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

import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import about from './components/About.vue';
import BlogPage from './components/BlogPage.vue';
import VideoPage from './components/VideoPage.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

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


new Vue({
  el: '#app',
  router,
  render: function (h) { return h(App) },
})

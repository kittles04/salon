import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import About from './components/About.vue'

Vue.config.productionTip = false


new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')

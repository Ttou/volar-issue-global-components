import VueCompositionAPI from '@vue/composition-api'
import Vue from 'vue'

import App from './App.vue'
import components from './components'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

const app = new Vue({
  render: h => h(App)
})

app.$mount('#app')

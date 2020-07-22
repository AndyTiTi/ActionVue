import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import IconDemo from './components/IconDemo.vue'

import './index.css'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: 'switch', component: SwitchDemo },
        { path: 'icon', component: IconDemo },
      ]
    }
  ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')

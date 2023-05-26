import { createRouter, createWebHistory } from 'vue-router'
import Root from './components/root/index.vue'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Root },
    ...routes,
  ],
})

export default router

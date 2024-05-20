import { createRouter, createWebHistory } from 'vue-router'
import TheTaskListPage from '@/components/pages/TheTaskListPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheTaskListPage
    }
  ]
})

export default router

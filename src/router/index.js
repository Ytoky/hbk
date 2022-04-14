import { createRouter, createWebHashHistory } from 'vue-router'
import LearningAsign from '../views/LearningAsign.vue'


const routes = [
  {
    path: '/',
    name: 'learning',
    component: LearningAsign
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
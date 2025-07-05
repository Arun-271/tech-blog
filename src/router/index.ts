import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/blog/:slug',
      name: 'blog',
      component: () => import('@/components/BlogView.vue'),
      props: true,
    },
  ],
})

export default router

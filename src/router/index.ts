import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/HomeView.vue'),
    },
    {
      path: '/blog/:slug',
      name: 'blog',
      component: () => import('@/components/BlogView.vue'),
      props: true,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import('@/components/NotFound.vue'),
    },
  ],
})

export default router

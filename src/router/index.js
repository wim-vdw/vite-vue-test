import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import AboutView from '../views/AboutView.vue'
import StarwarsView from '../views/StarwarsView.vue'
import CompositionView from '../views/CompositionView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { useUserStore1 } from '../stores/user.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      meta: {
        requiresAuthentication: true,
      },
    },
    {
      path: '/starwars',
      name: 'starwars',
      component: StarwarsView,
      meta: {
        requiresAuthentication: false,
      },
    },
    {
      path: '/composition',
      name: 'composition',
      component: CompositionView,
      meta: {
        requiresAuthentication: false,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        requiresAuthentication: false,
      },
    },
    {
      path: '/:notFound(.*)',
      name: 'notFound',
      component: NotFoundView,
    },
  ],
})

router.beforeEach((to) => {
  const userStore = useUserStore1()
  if (to.meta.requiresAuthentication && !userStore.authenticated) {
    alert('Authenticate first!')
    return { name: 'home' }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UtilisateursView from '../views/UtilisateursView.vue'
import AjouterView from '../views/AjouterView.vue'
import ModifierUserView from '../views/ModifierUserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/utilisateurs',
    name: 'utilisateurs',
    component: UtilisateursView
  },
  {
    path: '/ajouter',
    name: 'ajouter',
    component: AjouterView
  },
  {
    path: '/modifier:user',
    name: 'modifier',
    component: ModifierUserView,
    props: true
    
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

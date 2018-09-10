import VueRouter from 'vue-router';
import MakeGameBoard from './components/MakeGameBoard.vue';
import Home from './components/Home.vue';
import CategoryForm from './components/CategoryForm.vue';
import Auth from './components/Auth';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/auth', component: Auth },
    { path: '/new', component: MakeGameBoard },
    { path: '/form', component: CategoryForm },
    { path: '*', redirect: '/' }
  ]
});
import VueRouter from 'vue-router';
import MakeGameBoard from './components/MakeGameBoard.vue';
import Home from './components/Home.vue';
import CategoryForm from './components/CategoryForm.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/new', component: MakeGameBoard },
    { path: '/form', component: CategoryForm },
    { path: '*', redirect: '/' }

  ]

});
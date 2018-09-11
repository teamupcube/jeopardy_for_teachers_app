import VueRouter from 'vue-router';
import MakeGameBoard from './components/MakeGameBoard.vue';
import Dash from './components/Dash.vue';
import CategoryForm from './components/CategoryForm.vue';
import Auth from './components/Auth';
import GameSetup from './components/GameSetup';
import AddClassName from './components/AddClassName';
import AddTeamNames from './components/AddTeamNames';
import Instructions from './components/Instructions';
import Search from './components/Search';


export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Dash },
    { path: '/auth', component: Auth },
    { path: '/new', component: MakeGameBoard },
    { 
      path: '/play', 
      component: GameSetup, 
      children: [
        { path: 'class-name', component: AddClassName },
        { path: 'team-names', component: AddTeamNames },
        { path: 'instructions', component: Instructions },
        { path: '', redirect: 'class-name' }
      ]
    },
    { 
      path: '/form',
      component: CategoryForm,
      children: [
        { path: '/search', component: Search }
      ] 
    },
    { path: '*', redirect: '/' }
  ]
});
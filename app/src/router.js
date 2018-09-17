import VueRouter from 'vue-router';
import BoardName from './components/BoardName';
import Dash from './components/Dash';
import AddClueView from './components/AddClueView';
import Auth from './components/Auth';
import AddClassName from './components/AddClassName';
import AddTeamNames from './components/AddTeamNames';
import Instructions from './components/Instructions';
import CategoryName from './components/CategoryName';
import Search from './components/Search';
import CustomClue from './components/CustomClue';
import GamePlay from './components/GamePlay';
import YourBoard from './components/YourBoard';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Dash },
    { path: '/auth', component: Auth },
    { path: '/board', component: BoardName },
    { path: '/board/:id', component: CategoryName },
    { path: '/game', component: AddClassName },
    { path: '/game/:id', component: AddTeamNames },
    { path: '/game/:id/instructions', component: Instructions },
    { path: '/game/:id/gameplay', component: GamePlay },
    { 
      path: '/board/:id/categories/:categoryId', 
      component: AddClueView,
      children: [
        { path: 'custom-clue', component: CustomClue },
        { path: 'search', component: Search },
        { path: 'your-board', component: YourBoard }
      ]
    },
    { path: '*', redirect: '/' }
  ]
});
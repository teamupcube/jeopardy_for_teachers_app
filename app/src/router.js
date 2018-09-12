import VueRouter from 'vue-router';
import MakeGameBoard from './components/MakeGameBoard';
import Dash from './components/Dash';
import MakeClues from './components/MakeClues';
import Auth from './components/Auth';
import GameSetup from './components/GameSetup';
import AddClassName from './components/AddClassName';
import AddTeamNames from './components/AddTeamNames';
import Instructions from './components/Instructions';
import MakeCategory from './components/MakeCategory';
import Search from './components/Search';


export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Dash },
    { path: '/auth', component: Auth },
    { path: '/make-game', component: MakeGameBoard },
    { path: '/make-game/:id', component: MakeCategory },
    { path: '/make-game/:id/categories/:categoryId', component: MakeClues },
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
    { path: '*', redirect: '/' }
  ]
});
import VueRouter from 'vue-router';
import Auth from './components/Auth';

export default new VueRouter({
    routes: [
        { path: '/auth', component: Auth }
    ]
});
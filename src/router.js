import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home'
import Profile from './components/Profile'
Vue.use(Router);

let router = new Router({
    routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/signin', name: 'signin', component: Signin},
        { path: '/signup', name: 'signup', component: Signup},
        { path: '/profile', name: 'profile', component: Profile, meta: {authRequered: true}}
    ],
    mode: 'history'
});

router.beforeEach((to,from,next)=>{
    Store.dispatch('INIT_AUTH')
        .then(user => {
            if(to.matched.some(route => route.meta.authRequered)){
                if(!user)
                    next('./signin');
                else
                    next();
            } else {
                next();
            }
        })
});

export default router
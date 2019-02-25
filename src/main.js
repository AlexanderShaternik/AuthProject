import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import router from './router'
import firebase from 'firebase'
import VuetifyConfirm from 'vuetify-confirm'

Vue.use(VuetifyConfirm, {
    buttonFalseText: 'No',
    buttonTrueText: 'Yes',
    width: 400,
});


Vue.config.productionTip = false;

Vue.use(Vuetify,
    // {
    // breakpoint: {
    //     // thresholds: {
    //     //     xs: 360,
    //     //     sm: 768,
    //     //     md: 960,
    //     //     lg: 1280,
    //     //     xl: 1920
    //     // },
    //     scrollbarWidth: 10
    // }
// }
);

firebase.initializeApp({
    apiKey: "AIzaSyAM82YMzjfyBmhUy9jiPfqO1a3WP_Cpmbk",
    authDomain: "terminal-command.firebaseapp.com",
    databaseURL: "https://terminal-command.firebaseio.com",
    projectId: "terminal-command",
    storageBucket: "terminal-command.appspot.com",
    messagingSenderId: "438664765339"
});

new Vue({
    router,
    store,
    render: h => h(App),
    created(){
    }
}).$mount('#app');

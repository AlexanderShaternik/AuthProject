import firebase from 'firebase'

export default {
    state: {
        user: {
            isAuthenticated: false,
            uid: null,
        },
        unsubscribeAuth: null
    },
    mutations: {
        SET_USER(state,payload){
            state.user.isAuthenticated = true;
            state.user.uid = payload
        },
        UNSET_USER(state){
            state.user.isAuthenticated = false;
            state.user.uid = null
        },
        SET_UNSUBSCRIBE_AUTH(state,payload){
            state.unsubscribeAuth = payload
        }
    },
    actions:{
        INIT_AUTH({dispatch,commit,state}){
            return new Promise((resolve,reject)=>{
                if(state.unsubscribeAuth)
                    state.unsubscribeAuth();

                let unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
                    dispatch('STATE_CHANGED',user);
                    resolve(user);
                });

                commit('SET_UNSUBSCRIBE_AUTH',unsubscribe)
            })
        },
        SIGNUP({commit},payload){
            commit('SET_LOADING',true);
            commit('CLEAR_ERROR');
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    // commit('SET_USER',user.uid);   // т.к будет вызываться STATE_CHANGED() из main.js
                    commit('SET_LOADING',false)
                })
                .catch(function(error) {
                    commit('SET_LOADING',false);
                    commit('SET_ERROR',error.message)
                });
        },
        SIGNIN({commit},payload){
            commit('SET_LOADING',true);
            commit('CLEAR_ERROR');
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    // commit('SET_USER',user.uid);   // т.к будет вызываться STATE_CHANGED() из main.js
                    commit('SET_LOADING',false)
                })
                .catch(function(error) {
                    commit('SET_LOADING',false);
                    commit('SET_ERROR',error.message)
                });
        },
        SIGNOUT(){
            firebase.auth().signOut();
        },
        STATE_CHANGED({commit},payload){
            if(payload){
                commit('SET_USER',payload.uid);
            } else {
                commit('UNSET_USER');
            }
        }


    },
    getters: {
        isUserAuthenticated: (state) => state.user.isAuthenticated
    }
}
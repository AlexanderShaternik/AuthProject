import Vue from 'vue'
import Vuex from 'vuex'
import terminalsModule from './store/terminals'
import userModule from './store/user'
import generalModule from './store/general'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        terminalsModule,
        userModule,
        generalModule
    }
})
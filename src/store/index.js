// import state from './state'
// import * as getters from './getters'
// import * as actions from './actions'
// import mutations from './mutations'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
  export default new Vuex.Store({
    state: {
      count: 0,
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    },
    getters: {
      doneTodos: state => {
        return state.todos.filter(todo => todo.done)
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      add(state){
        state.count+=1;
       },
       reduce(state){
        state.count-=1;
       }
    }

    // state,
    // getters,
    // actions,
    // mutations
  })
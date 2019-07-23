import Vue from 'vue'
import TodoList from './TodoList.vue'
import Vuex from "vuex";

Vue.config.productionTip = false




// import axios from "axios";
Vue.use(Vuex);

 const store = new Vuex.Store({
  state:{
    counterNumber:0,
    listItem:[],
    status:'all'
  },
  getters:{
    getCountNumber:function(state){
   return function(){
     return state.counterNumber;
   }
  },
  getListItem:function(state){
    return function(){
      return state.listItem
    }
  },
  getStatus:function(state){
    return function(){
      return state.status
    }
  }
},
mutations:{
  updateCountNumber:function(state,payload){
    window.console.log(payload+"!!1")
    state.counterNumber=payload;
  },
  updateListItem:function(state,payload){
    state.listItem=payload;
    window.console.log(state.listItem[0].value+"listItem");
  },
  updateStatus:function(state,payload){
    state.status=payload;
  }
}
 })


new Vue({
  render: h => h(TodoList),
  store
}).$mount('#app')
<template>
  <div id="app">
    <Header></Header>
    <Body @push="getList" v-bind:state="state" class="myBody"></Body>
    <Footer v-bind:footList="mainlist" @push="getState"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Body from "./components/Body.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'app',
  data(){
    return{
      mainlist:[],
      state:'all'
    }
  },
  components: {
    Header,
    Body,
    Footer
  },
  methods:{
    getList:function(list){
      this.mainlist=list;
      //window.console.log(list[0].value);
    },
    getState:function(state){
      this.state=state;
      window.console.log(state);
    }
    
    
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 .myBody{
    font: normal normal 13px/16px "Open Sans", sans-serif;
}
</style>

<template>
  <div >
    <button class="myButton" @click="allEvent">all</button>
    <button class="myButton" @click="activeEvent">active</button>
    <button class="myButton" @click="completeEvent">complete</button>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data(){
    return{
   state:''
    };
  },
  components: {
    
  },
    props:{
        footList:{
          type:Array,
          default:()=>[]
      }
  },
  methods:{
    activeEvent:function(){
       this.state="active";
       this.$store.commit("updateCountNumber",this.state);
    },
    allEvent:function(){
      this.state="all";
      this.$store.commit("updateCountNumber",this.state);
    },
    completeEvent:function(){
       this.state="complete";
      this.$store.commit("updateCountNumber",this.state);
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
.myButton:hover{
cursor: pointer;
opacity: .8;
}
</style>
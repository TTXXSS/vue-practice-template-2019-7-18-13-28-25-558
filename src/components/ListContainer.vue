<template>
  <div >
      <ol>
      <li v-for="index in list" :key="index">
         <input type="checkbox" v-model="index.finished">{{index.value}}
      </li>
      </ol>
  </div>
</template>

<script>

export default {
  name: 'ListContainer',
  components: {
   
  },
  props:{
      list:{
          type:Array,
          default:()=>[]
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
</style>
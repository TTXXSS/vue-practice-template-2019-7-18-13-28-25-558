<template>
<div>
  <input type="text"  v-model="value" @keydown.enter="handleClickAdd">
  <input type="button" class="buttonClass" value="add" @click="handleClickAdd"><br>
</div>
</template>

<script>

export default {
  name: 'InputBar',
  data(){
      return{
          value:""
      };
  },
  components: {
  },
  methods:{
      handleClickAdd:function(){
        this.$emit('push',this.value);
        this.value='';
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
.inputText{
    width:200px;
    margin-right: 10px;
}
.buttonClass{
    background-color: rosybrown;
}
.input-text{
    width: 70%;
}

input{
    padding: 4px 15px 4px 0;
    
}
</style>
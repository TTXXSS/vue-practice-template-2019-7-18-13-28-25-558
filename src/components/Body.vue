<template>
  <div >
      <InputBar @push="onPushToDoItem" ></InputBar>
      <ListContainer v-bind:list="list" v-bind:state="state" @push="onPushToDoItem"></ListContainer>
  </div>
</template>

<script>
import InputBar from "./InputBar.vue";
import ListContainer from "./ListContainer.vue";

let id = 0;
const getId = () => {
  return id++;
};

export default {
  name: "Body",
  data() {
    return {
      list: []
    };
  },
    props:{
      state:{type:String,default:''}
  },
  components: {
    InputBar,
    ListContainer
  },
  methods: {
    onPushToDoItem(payLoad) {
      this.list.push({ finished: false, value: payLoad, id: getId() });
      this.onPushToDoList(this.list);
      this.$store.commit("updateListItem",this.list);
    },
    onPushToDoList(list){
        this.list=list;
        this.$emit("push",list);
    },

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 body{
    font: normal normal 13px/16px "Open Sans", sans-serif;
}
</style>
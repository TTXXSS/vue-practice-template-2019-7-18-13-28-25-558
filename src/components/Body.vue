<template>
  <div >
      <InputBar @push="onPushToDoItem" ></InputBar>
      <ListContainer v-bind:list="list"></ListContainer>
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
  components: {
    InputBar,
    ListContainer
  },
  methods: {
    onPushToDoItem(payLoad) {
      this.list.push({ finished: false, value: payLoad, id: getId() });
    }
  },
  props:{
        mainList:{
          type:Array,
          default:()=>[]
      }
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
</style>
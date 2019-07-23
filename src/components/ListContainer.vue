<template>
  <div >
    <div v-for="index in list" :key="index">
      <ul v-if="state==='all'">
      <li >
        <input type="checkbox" v-model="index.finished">
        <span id="myspan" contenteditable="Contenteditable" @dblclick="changestatus" @keydown.enter.prevent="handleChange($event,index.id)">
        {{index.value}}
         </span>
      </li>
      </ul>
      <ul v-else-if="state==='complete'&&index.finished===true">
      <li >
        <input type="checkbox" v-model="index.finished">
        <span id="myspan" contenteditable="Contenteditable" @dblclick="changestatus" @keydown.enter.prevent="handleChange($event,index.id)">
          {{index.value}}
           </span>
      </li>
      </ul>
      <ul v-else-if="state==='active'&&index.finished===false">
      <li >
        <input type="checkbox" v-model="index.finished">
        <span id="myspan" contenteditable="Contenteditable" @dblclick="changestatus" @keydown.enter.prevent="handleChange($event,index.id)">
         {{index.value}}
         </span>
      </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListContainer',
     data() {
      return {
        itemList: [],
        Contenteditable: false,
        text: ''
      };
  },
  components: {
   
  },
  props:{
      list:{
          type:Array,
          default:()=>[]
      },
      state:{type:String,
      default:'all'}
  },
  methods:{
    changestatus(){
      this.Contenteditable=true;
    },
    handleChange(event,index){
      this.isContenteditable = false;
      this.list[index].value= event.target.innerText;
      this.onPushToDoList(this.list);
    },
    onPushToDoList(list){
        this.$emit("push",list);
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
  ol {
    padding-left: 20px;
  }

  ol li {
    padding: 5px;
    color: #000;
  }

  ol li span {
    word-break: break-all;
    width: 70%;
  }

  ol li:nth-child(even) {
    background: #f4ecec;
  }
</style>
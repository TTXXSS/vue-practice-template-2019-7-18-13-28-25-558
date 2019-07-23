<template>
  <div >
     <ol>
       <li v-for="item in itemList" v-bind:key="item.id">
        <input type = "checkbox" v-model="item.finished">
        <span :contenteditable="isContentEditable" @dblclick="changestatus" @keydown.enter.prevent="handleChange($event,item.id)">{{item.value}}</span>
       </li>
     </ol>
    
  </div>
</template>

<script>

export default {
  name: 'ListContainer',
     data() {
      return {
        itemList: [],
        isContentEditable: false,
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
  },
  mounted() {
    this.itemList = this.$store.getters.getListItem;
  },
  computed:{
  //  getListItem:function(){
  //        return this.$store.getters.getListItem();
  //    },
  //    getStatus:function(){
  //      return this.$store.getters.getStatus();
  //    },
    // filterListItem(){
    //   let status = this.$store.state.status;
    //   if(status==='all')
    //   return this.$store.getters.getListItem();
    //   else if(status==='complete')
    //   return this.$store.getters.getListItem().filter(i=>i.finished===true);
    //   else 
    //   return this.$store.getters.getListItem().filter(i=>i.finished===false);
    // }
  },
  watch: {
    '$store.state.status'(newValue) {
      let status = newValue;
       window.console.log(newValue)
       //window.console.log(this.itemList)
      if(status==='all')
       this.itemList = this.$store.getters.getListItem();
      else if(status==='complete')
      this.itemList = this.$store.getters.getListItem().filter(i=>i.finished===true);
      else 
      this.itemList = this.$store.getters.getListItem().filter(i=>i.finished===false);
    },
    '$store.state.listItem'(newValue) {
      this.itemList = newValue
    },
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
<template>
  <div class="hello">
    <h1>{{$store.state.count}}</h1>
    <p> {{countFN}}</p>
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>
    <div @click="$store.commit('increment')">click</div>
    <ul>
      <li v-for="(key,val,index) in $store.state.todos" :key="index">{{key.id}}</li>
    </ul>
  </div>
</template>

<script>
import Vuex from 'vuex'
import store from '@/store'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    countFN(){
      return this.$store.state.count;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


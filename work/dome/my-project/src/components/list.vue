<template>
<ul class="todo-main">
  <item  v-for='(todo, index) in todos' :key="index" :todo="todo" :todoindex='index' :remove='remove'></item>
</ul>
</template>

<script>
import item from './item.vue'
export default {
  // 申明接收属性
  props: ['todos', 'remove'],
  components: {
    item
  }
}
</script>

<style>
ul{padding: 10px;border: 1px solid #ddd;border-radius: 5px;}
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>

<template>
<li @mouseenter="showBtn(true)" @mouseleave="showBtn(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="todoremove(todoindex)">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    todoindex: Number,
    remove: Function
  },
  data () {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    showBtn (isShow) {
      if (isShow) {
        this.bgColor = '#dddddd'
      } else {
        this.bgColor = 'white'
      }
      this.isShow = isShow
    },
    todoremove (index) {
      var {todo, todoindex, remove} = this
      if (confirm(`确定要删除${this.todo.name}吗?`)) {
        this.remove(todoindex)
      }
    }
  }
}
</script>

<style>
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

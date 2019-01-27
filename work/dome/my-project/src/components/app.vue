<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo_header :add='add'></todo_header>
      <todo_list :todos="todos" :remove='remove'></todo_list>
      <todo_footer :remove-choice='removeChoice' :todos="todos" :checkclick='footercheckclick'></todo_footer>
    </div>
  </div>
</template>

<script>
import header from './header.vue'
import list from './list.vue'
import footer from './footer.vue'
import storageUtils from '../util/localStorageUtils.js'
export default {
  data () {
    return {
      todos: []
    }
  },
  created () {
    // 模拟从后台获取
    setTimeout(() => {
      this.todos = storageUtils.readTodos()
    }, 1000)
  },
  methods: {
    add (todo) {
      this.todos.unshift(todo)
    },
    remove (index) {
      this.todos.splice(index, 1)
    },
    removeChoice () {
      this.todos = this.todos.filter(item => !item.complete)
    },
    footercheckclick (ischeck) {
      this.todos.forEach((item) => {
        item.complete = ischeck
      })
    }
  },
  computed: {
    allcheck () {
      if (this.todos.length <= 0) {
        return false
      } else {
        if (this.todos.filter(item => item.complete === false).length > 0) {
          return false
        } else {
          return true
        }
      }
    }
  },
  watch: {
    todos: {
      // 深度监视
      deep: true,
      // handler (newTodos) {
      //   // 保存
      //   storageUtils.saveTodos(newTodos)
      // }
      handler: storageUtils.saveTodos
    }
  },
  components: {
    'todo_header': header,
    'todo_list': list,
    'todo_footer': footer
  }
}
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

<template>
<div class="todo-footer">
  <label>
    <input type="checkbox" v-model='allcheck' @click="foot_checkclick"/>
  </label>
  <span>
    <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
  </span>
  <button class="btn btn-danger" @click="foot_removeall" v-show="completeSize!=0">清除已完成任务</button>
</div>
</template>

<script>
export default {
  props: {
    todos: Array,
    removeChoice: Function,
    checkclick: Function
  },
  data () {
    return {
    }
  },
  methods: {
    foot_checkclick () {
      this.checkclick(this.allcheck)
    },
    foot_removeall () {
      this.removeChoice()
    }
  },
  computed: {
    completeSize () {
      return this.todos.reduce((preTotal, todo) => {
        return preTotal + (todo.complete ? 1 : 0)
      }, 0)
    },
    allcheck: {
      get () {
        return this.completeSize === this.todos.length && this.completeSize !== 0
      },
      set (value) {
        this.checkclick(value)
      }
    }
  }
}
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>

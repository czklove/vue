/*
* localStorage主句存储工具模块、
* 函数模块:只提供一个功能
* 对象模块:提供多个功能
*/
const TODOS_KEY = 'todos_key'
export default {
  readTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')// 将json字符串转化成数组初始化为null则传入'[]'
  },
  saveTodos (todos) { // 先将todos转化成json再存入
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}

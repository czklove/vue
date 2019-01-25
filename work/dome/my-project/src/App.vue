<template>
  <div>
    <hello></hello>
    <img src="./assets/logo.png" alt="logo"/>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import hello from './components/HelloWorld.vue'
export default {
  data: function () {
    return {
      msg: 'app.vue'
    }
  },
  components: {
    hello
  }
}
</script>

<style>

</style>

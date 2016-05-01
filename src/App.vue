<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>

<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <label>(123) 456-7890</label>
    <input type="text" name="name" v-model="phone" v-mask="(999) 999-9999">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello vue-mask!',
      phone: ''
    }
  }
}
</script>

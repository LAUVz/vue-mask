<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>

<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <label>Phone (123) 456-7890</label>
    <input type="text" name="name" v-mask="(999) 999-9999">
    <br><label>Date 04/05/2016</label>
    <input type="text" name="name" v-mask="99/99/9999">
    <br><label>Money $123.45</label>
    <input type="text" name="name" v-mask="$999.99">
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

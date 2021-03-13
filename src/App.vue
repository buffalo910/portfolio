<template>
  <div id="app">
    <Header/><Contents/><Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Contents from './components/Contents'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Contents,
    Footer
  }
}
</script>

<style>
@import "./css/reset.css";

body {
  word-break: break-all;
  background-color: #F5F5F5;
}
</style>

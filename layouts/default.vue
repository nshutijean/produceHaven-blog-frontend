<template>
  <div>
    <nav-bar></nav-bar>
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default {
  components: {
    'nav-bar': NavBar,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  body{
    background-color: rgb(227,227,227);
    font-family: 'Nunito', sans-serif;
  }
</style>

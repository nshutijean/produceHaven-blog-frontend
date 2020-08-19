<template>
  <div>
    <Hero/>
    <Heading/>
    <Posts/>
  </div>
</template>
<script>
import Posts from '../components/Posts';
import Heading from '../components/Heading';
import Hero from '../components/Hero';
export default {
  components: {
    Posts,
    Heading,
    Hero
  }
}
</script>

<style>

</style>

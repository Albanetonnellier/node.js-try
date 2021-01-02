<template>
  <header>
    <h1> {{ title }}</h1>
  </header>
</template>

<script>
import Ninjas from './Ninjas.vue'

export default {
  components: {
  'ninjas': Ninjas
  },
  data() {
  return {
    title: 'ninja app'
  }
  }
}
</script>

<style>
h1 {
  
}
</style>
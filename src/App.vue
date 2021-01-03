<template>
  <header>
    <h1> {{ title }}</h1>
  </header>
  <button>
  </button>
</template>

<script>
import Ninjas from './ninja.vue'

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
  color: #222
}
</style>
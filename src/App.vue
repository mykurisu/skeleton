<template>
  <Skeleton1 />
</template>

<script>
import Skeleton1 from './components/skeleton-1.vue'

export default {
  name: 'App',
  components: {
    Skeleton1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

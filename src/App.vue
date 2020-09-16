<template>
  <div id="main">
    <Skeleton1 />
    <Skeleton2 />
    <Skeleton3 />
  </div>
</template>

<script>
import Skeleton1 from './components/skeleton-1.vue'
import Skeleton2 from './components/skeleton-2.vue'
import Skeleton3 from './components/skeleton-3.vue'

export default {
  name: 'App',
  components: {
    Skeleton1,
    Skeleton2,
    Skeleton3,
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  min-height: 100vh;
}
#main {
  padding: 30px 0;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
}
</style>

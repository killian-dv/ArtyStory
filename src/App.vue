<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style scoped>
  #app {
    height: 100vh;
  }
  header {
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-around;
  }
</style>

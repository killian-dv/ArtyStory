<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
      <nav>
        <RouterLink to="/napoleon"><img alt="Vue logo" class="logo" src="@/assets/napoleon.png" width="125" height="125" />Napoleon</RouterLink>
      </nav>
  </header> -->

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

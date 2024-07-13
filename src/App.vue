<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <div class="container container-custom ">
    <RouterView />
  </div>
</template>

<style>
body {
  background-color: #262829;
  color: #a3aaae
}
</style>

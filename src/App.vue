<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar
    :list="[
      {
        name: 'asd',
        icon: 'jore',
      },
      {
        name: 'bobob',
        icon: 'jore',
      },
    ]"
  />
  <div class="content">
    <RouterView />
  </div>
</template>

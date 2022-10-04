<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import FooterItem from "@/components/FooterItem.vue";
</script>

<template>
  <NavBar
    :list="[
      {
        name: 'Sobre',
        icon: 'jore',
      },
      {
        name: 'Contato',
        icon: 'jore',
      },
    ]"
  />
  <FooterItem/>
  <div class="content">
    <RouterView />
  </div>
  
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
// import NavBar from "./components/NavBar.vue";
// import FooterItem from "./components/FooterItem.vue";
// import ProjectRegister from "./pages/ProjectRegister.vue";
</script>

<template>
    <NavBar :currentPage.number="1"
    />
  <RouterView />
</template>

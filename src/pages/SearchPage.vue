<script setup lang="ts">
  import NavBar from "../components/NavBar.vue";
  import SearchBar from "../components/SearchBar.vue";
  import { RouterView } from "vue-router";
</script>

<template>
  <NavBar :list = "[{name: 'Início', icon: 'aa'}, {name: 'Buscar', icon: 'aa'},]" :currentPage="2"/>
  <SearchBar/>
</template>

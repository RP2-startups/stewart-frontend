<script setup lang="ts">
  import NavBar from "../components/NavBar.vue";
  import SearchBar from "../components/SearchBar.vue";
</script>

<template>
  <NavBar :list = "[{name: 'Início', icon: 'aa', comp:'home'}, {name: 'Buscar', icon: 'aa', comp:'search'},]" :currentPage="2"/>
  <SearchBar/>
</template>

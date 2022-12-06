<script setup lang="ts">
  import ImageCardCarousel from "../components/ImageCardCarousel.vue";
</script>

<template>
  <ImageCardCarousel :cardWidth="240" :cardHeight="400" title="Projetos Recomendados:" notFoundText="Nenhum projeto encontrado." />
</template>

<style>
@import "../assets/styles/base.css";

.text {
  font-family: 'Jost';
  font-size: 2rem;
}
</style>
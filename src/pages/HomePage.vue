<script setup lang="ts">
  import ImageCardCarousel from "../components/ImageCardCarousel.vue";
</script>

<template>
  <div class="carousel">
    <ImageCardCarousel @cardClicked="handleClicked" :cardsProp="cards" :cardWidth="300" :cardHeight="400"
      title="Projetos Recomendados:" notFoundText="Nenhum projeto encontrado." />
  </div>
</template>

<style>
@import "../assets/styles/base.css";

.carousel {
  margin: 2rem;
}
</style>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    data() {
      return {
        cardObj: { id: "", name: "", desc: "", icon: "" },
        cards: [
          { id: "1", name: "1", desc: "Among Us é um jogo", icon: "https://preview.redd.it/otcm08c8oyy51.jpg?auto=webp&s=7924c636151996440520b3a9c94e70f59792491e" },
          { id: "2", name: "2", desc: "Among Us é um jogo", icon: "https://preview.redd.it/otcm08c8oyy51.jpg?auto=webp&s=7924c636151996440520b3a9c94e70f59792491e" },
          { id: "3", name: "3", desc: "Among Us é um jogo", icon: "https://preview.redd.it/otcm08c8oyy51.jpg?auto=webp&s=7924c636151996440520b3a9c94e70f59792491e" },
          { id: "4", name: "4", desc: "Among Us é um jogo", icon: "https://preview.redd.it/otcm08c8oyy51.jpg?auto=webp&s=7924c636151996440520b3a9c94e70f59792491e" },
          { id: "5", name: "5", desc: "Among Us é um jogo", icon: "https://preview.redd.it/otcm08c8oyy51.jpg?auto=webp&s=7924c636151996440520b3a9c94e70f59792491e" },
        ],
      };
    },
    methods: {
      handleClicked(card: any) {
        this.cardObj = card;
        this.$router.push(`/project/${card.id}/posts`)
      }
    }
  });
</script>

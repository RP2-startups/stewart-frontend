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
  import ProjectDataService from "@/services/ProjectDataService";
  import { defineComponent } from "vue";
  export default defineComponent({
    data() {
      return {
        cardObj: { id: "", name: "", desc: "", icon: "" },
        cards: [] as Object[],
      };
    },
    methods: {
      handleClicked(card: any) {
        this.cardObj = card;
        this.$router.push(`/project/${card.id}/posts`)
      }
    },
    created() {
      this.cards = [];
      ProjectDataService.searchAll()
        .then(response => {
          for(let i = 0; i < response.data.length; i++) {
            let r = response.data[i];
            this.cardObj = { id: r.id, name: r.name, desc: r.description, icon: r.picture };
            this.cards.push(this.cardObj);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });
</script>

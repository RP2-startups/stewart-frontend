<script setup lang="ts">
  import ImageCardDisplay from "../components/ImageCardDisplay.vue";
</script>

<template>
  <ImageCardDisplay class="image-card-display" :cardWidth="cardWidth" :cardHeight="cardHeight" :cardsProp="cards" />
</template>

<style>

.image-card-display {
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
}

</style>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "@/services/UserDataService";
export default defineComponent({
    created() {
      UserDataService.getProjects(this.$route.params.input as String)
      .then(response => {
        for(let i = 0; i < response.data.length; i++) {
          let r = response.data[i];
          let cardObj = { name: r.name, desc: r.description, icon: r.picture };
          this.cards.push(cardObj);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    },
    data() {
      return {
        cardWidth: 240,
        cardHeight: 400,
        cards: [] as Object[],
      };
    },
});
</script>

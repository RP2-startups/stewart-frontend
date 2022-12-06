<script setup lang="ts">
  import ImageCardCollapsableDisplay from "../components/ImageCardCollapsableDisplay.vue";
</script>

<template>
  <ImageCardCollapsableDisplay class="image-card-display" v-if="reRender" :cardWidth="cardWidth" :cardHeight="cardHeight"
    :cardsProp="cards" title="Projetos:" :notFoundText="'Nenhum projeto encontrado.'" />
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
import ProjectDataService from "@/services/ProjectDataService";
export default defineComponent({
    created() {
      this.query();
    },
    data() {
      return {
        cardWidth: 240,
        cardHeight: 400,
        cards: [] as Object[],
        reRender: true,
      };
    },
    methods: {
      query() {
        this.cards = [];
        ProjectDataService.search(this.$route.params.input as string)
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
      }
    },
    watch: {
      '$route.params.input': {
        async handler(input) {
          this.reRender = false;
          this.query();
          await this.$nextTick();
          this.reRender = true;
        },
        deep: true,

      }
    }
});
</script>

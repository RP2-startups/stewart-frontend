<script setup lang="ts">
  import ImageCardCollapsableDisplay from "../components/ImageCardCollapsableDisplay.vue";
</script>

<template>
  <ImageCardCollapsableDisplay @cardClicked="handleClick" class="image-card-display" v-if="reRender" :cardWidth="cardWidth"
  :cardHeight="cardHeight" :cardsProp="cardsProjs" title="Projetos:" notFoundText="Nenhum projeto encontrado." collapseId="collapseProj" />
  <ImageCardCollapsableDisplay @cardClicked="handleClick" class="image-card-display" v-if="reRender" :cardWidth="cardWidth"
  :cardHeight="cardHeight" :cardsProp="cardsUsers" title="Usuários:" notFoundText="Nenhum usuário encontrado." collapseId="collapseUser" />
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
import UserDataService from "@/services/UserDataService";
export default defineComponent({
    created() {
      this.query();
    },
    data() {
      return {
        cardWidth: 240,
        cardHeight: 400,
        cardsProjs: [] as Object[],
        cardsUsers: [] as Object[],
        cardObj: { id: "", name: "", desc: "", icon: "" },
        reRender: true,
      };
    },
    methods: {
      handleClick(card: any) {
        this.cardObj = card;
      },
      query() {
        this.cardsProjs = [];
        ProjectDataService.search(this.$route.params.input as string)
        .then(response => {
          for(let i = 0; i < response.data.length; i++) {
            let r = response.data[i];
            this.cardObj = { id: r.id, name: r.name, desc: r.description, icon: r.picture };
            this.cardsProjs.push(this.cardObj);
          }
        })
        .catch((e) => {
          console.log(e);
        });

        this.cardsUsers = [];
        UserDataService.search(this.$route.params.input as string)
        .then(response => {
          for(let i = 0; i < response.data.length; i++) {
            let r = response.data[i];
            let cardObj = { id: r.id, name: r.name, desc: r.about, icon: r.profile_picture };
            this.cardsUsers.push(cardObj);
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

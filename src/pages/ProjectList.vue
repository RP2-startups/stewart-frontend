<script setup lang="ts">
  import ImageCardCollapsableDisplay from "../components/ImageCardCollapsableDisplay.vue";
</script>

<template>
  <div class="dropdown">
    <button class="btn filterButton dropdown-toggle" type="button" id="filterButton" data-bs-toggle="dropdown" aria-expanded="false">
      {{ category.name.toUpperCase() }}
    </button>
    <ul class="dropdown-menu filterMenu" aria-labelledby="filterButton">
      <li v-for="cat in categoryList">
        <a style="color: white;" class="dropdown-item" href="#" @click="changeCategory(cat)">{{ cat.name.toUpperCase() }}</a>
      </li>
    </ul>
  </div>
  <ImageCardCollapsableDisplay @cardClicked="handleClick" class="image-card-display" v-if="reRender" :cardWidth="cardWidth"
  :cardHeight="cardHeight" :cardsProp="cardsProjs" title="Projetos:" notFoundText="Nenhum projeto encontrado." collapseId="collapseProj" />
  <ImageCardCollapsableDisplay @cardClicked="handleClick" class="image-card-display" v-if="reRender" :cardWidth="cardWidth"
  :cardHeight="cardHeight" :cardsProp="cardsUsers" title="Usuários:" notFoundText="Nenhum usuário encontrado." collapseId="collapseUser" />
</template>

<style>
.filterButton {
  border-color: var(--color-pink) !important;
  color: white !important;
  background-color: var(--color-purple-dark) !important;
  margin-left: 2rem;
}
.filterMenu {
  border-color: var(--color-pink) !important;
  color: white !important;
  background-color: var(--color-purple-dark) !important;
}
.dropdown-item:hover {
  background-color: var(--color-translucent-pink) !important;
}

.image-card-display {
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
}
</style>

<script lang="ts">
type Category = {
  id: number,
  name: string;
};

import { defineComponent } from "vue";
import ProjectDataService from "@/services/ProjectDataService";
import UserDataService from "@/services/UserDataService";
export default defineComponent({
    created() {
      this.query();
      this.getFilters();
    },
    data() {
      return {
        category: {id: -1, name: "Filtro por Categoria"},
      categoryList: [{ id: -1, name: "Filtro por Categoria" }] as Category[],
        cardWidth: 240,
        cardHeight: 400,
        cardsProjs: [] as Object[],
        cardsUsers: [] as Object[],
        cardObj: { id: "", name: "", desc: "", icon: "" },
        reRender: true,
        filters: '',
      };
    },
    methods: {
      handleClick(card: any) {
        this.cardObj = card;
        this.$router.push(
        `/project/${card.id}/posts`
      )
      },
      getFilters() {
        ProjectDataService.getCategories()
        .then(response => {
          response.data.forEach((category: any) => {
            let catObj = { id: category.id, name: category.name };
            this.categoryList.push(catObj)
          });
        })
        .catch(e => {
        })
      },
      changeCategory(cat: Category) {
        this.category = cat;
      },
      query() {
        this.cardsProjs = [];
        let searchInput = this.$route.params.input;
        if(this.category.id != -1)
          searchInput += "&categories=" + this.category.id;
        ProjectDataService.search(searchInput as string)
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
            let profPath = r.profile_picture.replace(".","http://localhost:3001")
            let cardObj = { id: r.id, name: r.name, desc: r.about, icon: profPath };
            this.cardsUsers.push(cardObj);
          }
        })
        .catch((e) => {
          console.log(e);
        });
      },
      async render() {
        this.reRender = false;
        this.query();
        await this.$nextTick();
        this.reRender = true;
      }
    },
    watch: {
      '$route.params.input': {
        async handler() {
          this.render();
        },
        deep: true,
      },
      category: {
        handler() {
          this.render();
        }
      }
    }
});
</script>

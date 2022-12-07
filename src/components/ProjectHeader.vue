<template>
  <div id="proj-header-top">
    <!--banner-->
    <img
        :src="banner"
      class="img-fluid w-100"
      id="proj-banner"
      alt="banner"
    />

    <!--icone do projeto-->
    <img
    :src="projectPic"
      class="img-thumbnail rounded"
      id="proj-icon"
      alt="icon"
    />
  </div>
  <!--nome do projeto-->
  <div id="proj-header-bottom">
    <div id="proj-top-row" class="row">
      <!--nome do projeto-->
      <div class="col">
        <p id="proj-title" class="fs-1 text-break">{{ title }}</p>
      </div>

      <!--estatisticas do projeto-->
      <div class="col d-flex justify-content-end">
        <ul id="proj-stats" class="d-inline-flex">
          <li class="proj-stat text-center ms-4">
            <p class="proj-stat-num fs-2">
              20
            </p>
            <p class="proj-stat-desc fs-5">
              Publicações
            </p>
          </li>
          <li class="proj-stat text-center ms-4">
            <p class="proj-stat-num fs-2">
              {{members}}
            </p>
            <p class="proj-stat-desc fs-5">
              Membros
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div id="proj-bot-row" class="row">
      <!--descricao do projeto-->
      <div class="col">
        <p class="fs-5">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
#proj-header-top {
  position: relative;
}

#proj-banner {
  display: block;
  max-height: 500px!important;
}

#proj-icon {
  position: absolute;
  bottom: -1rem;
  left: 2rem;
  height: calc(12rem + 30px);
}

#proj-title {
  margin-top: 1.5rem;
}

#proj-header-bottom {
  margin: 1rem 2rem 0 2rem;
}

#proj-stats {
  padding: 0;
  margin: 0;
}

.proj-stat-num {
  margin-bottom: 0.5rem;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["members", "banner", "projectPic", "postQtd", "title", "desc"],

  data() {},
  methods: {
    getUrl(path : String){
          return new URL(`../assets/images/${path}`,import.meta.url).href
      }
  },
  mounted() {},
});
</script>

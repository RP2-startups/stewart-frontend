<script setup lang="ts">
import { RouterView } from "vue-router";
import ProjectHeader from "@/components/ProjectHeader.vue";
import ProjectMenu from "@/components/ProjectMenu.vue";
</script>

<template>
  <div id="proj-page-wrapper">
    <!--topo da pagina do projeto (contem o banner, icone, estatisticas e descricao)-->
    <ProjectHeader :banner="banner" :desc="desc" :title="title" :project-pic="projectPic" :members="membersCount" />

    <!--permite navegação para as páginas publicações, integrantes e documentos-->
    <ProjectMenu />

    <!--conteúdo da subpagina "integrantes" (contem os cards de todos os integrantes do projeto)-->
    <div id="proj-page-content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
#proj-page-content {
  margin-inline: 2rem;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectDataService from "@/services/ProjectDataService";

export default defineComponent({
  data() {
    return {
      banner: "",
      projectPic: "",
      membersCount: "",
      postQtd: "",
      title: "",
      desc: ""
    };
  },

  mounted() {
    ProjectDataService.get(this.$route.params.id.toString())
      .then((response) => {
        let r = response.data;
        this.projectPic = r.picture.replace(".", "http://localhost:3001");
        this.banner = r.background_picture.replace(
          ".",
          "http://localhost:3001"
        );
        this.desc = r.description
        this.title = r.name,
        this.membersCount = r.projectParticipations.length
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>

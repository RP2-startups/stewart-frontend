<script setup lang="ts">
import { RouterView } from "vue-router";
import ProjectHeader from "@/components/ProjectHeader.vue";
import ProjectMenu from "@/components/ProjectMenu.vue";
</script>

<template>
  <div id="proj-page-wrapper">
    <!--topo da pagina do projeto (contem o banner, icone, estatisticas e descricao)-->
    <ProjectHeader :project_id="project_id" :banner="banner" :desc="desc" :title="title" :project-pic="projectPic" :members="membersCount" />

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

interface Pending {
  is_accepted: string;
}

export default defineComponent({
  data() {
    return {
      project_id: 0,
      banner: "",
      projectPic: "",
      membersCount: 0,
      postQtd: "",
      title: "",
      desc: ""
    };
  },

  mounted() {
    ProjectDataService.get(this.$route.params.id.toString())
      .then((response) => {
        let r = response.data;
        this.project_id = r.id,
        this.projectPic = r.picture.replace(".", "http://localhost:3001");
        this.banner = r.background_picture.replace(
          ".",
          "http://localhost:3001"
        );
        this.desc = r.description
        this.title = r.name,
        r.projectParticipations.forEach((element : Pending) => {
          if(element.is_accepted == "accepted"){
            this.membersCount++
          }
        });
        
        
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>

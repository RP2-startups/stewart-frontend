<script setup lang="ts">
import ProjectHeader from "@/components/ProjectHeader.vue";
import ProjectMenu from "@/components/ProjectMenu.vue";
import Members from "@/subpages/Members.vue";
</script>

<template>
  <!--topo da pagina do porojeto (contem o banner, icone, estatisticas e descricao)-->
  <ProjectHeader :propV="['veio risonho', 'texto ae ']" />

  <ProjectMenu />

  <!--conteúdo da subpagina "integrantes" (contem os cards de todos os integrantes do projeto)-->
  <div class="proj-page-content">
    <Members />
  </div>
</template>

<style scoped>
.proj-page-content {
  margin-top: 1.0rem;
  margin-inline: min(10vw, 100px);
}
</style>

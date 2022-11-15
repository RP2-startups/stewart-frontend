<script setup lang="ts">
import ProjectHeader from "@/components/ProjectHeader.vue";
import Members from "@/subpages/Members.vue";
</script>

<template>
    <!--topo da pagina do porojeto (contem o banner, icone, estatisticas e descricao)-->
    <ProjectHeader :propV="[
        'veio risonho', 'texto ae ']
        "/>

    <!--conteúdo da subpagina "integrantes" (contem os cards de todos os integrantes do projeto)-->
    <div class="proj-page-content">
        <Members />
    </div>
</template>

<style scoped>
    .proj-page-content {
        margin-inline: min(10vw, 100px);
    }
</style>
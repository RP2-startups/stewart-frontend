<script setup lang="ts">
    import { RouterView } from "vue-router";
    import ProjectHeader from "@/components/ProjectHeader.vue";
    import ProjectMenu from "@/components/ProjectMenu.vue";
</script>

<template>
    <div id="proj-page-wrapper">
        <!--topo da pagina do projeto (contem o banner, icone, estatisticas e descricao)-->
        <ProjectHeader />

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

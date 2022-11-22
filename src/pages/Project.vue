<script setup lang="ts">
import ProjectHeader from "@/components/ProjectHeader.vue";
import ProjectMenu from "@/components/ProjectMenu.vue";
import Members from "@/subpages/Members.vue";
</script>

<template>
    <div id="proj-page-wrapper">
        <!--topo da pagina do projeto (contem o banner, icone, estatisticas e descricao)-->
        <ProjectHeader :propV="['veio risonho', 'texto ae ']" />

        <!--permite navegação para as páginas publicações, integrantes e documentos-->
        <ProjectMenu />

        <!--conteúdo da subpagina "integrantes" (contem os cards de todos os integrantes do projeto)-->
        <div id="proj-page-content">
            <Members />
        </div>

    </div>
</template>

<style scoped>

#proj-page-wrapper {
    margin-inline: min(10vw, 100px);
}

#proj-page-content {
    margin-top: 1.0rem;
}
</style>

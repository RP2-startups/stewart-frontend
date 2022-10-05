<script setup lang="ts">
    import { RouterView } from "vue-router";
    import NavBar from "@/components/NavBar.vue";
</script>
    
<template>
    <img src="../assets/images/arrow-back.png" class="back-arrow d-none d-md-block">
    <div class="content">
    <RouterView />
    </div>
</template>

<style scoped>

    .back-arrow{
        margin-top: 20px;
        margin-left: 10px;
        width: 80px;
        height: 100px;
    }
</style>
    
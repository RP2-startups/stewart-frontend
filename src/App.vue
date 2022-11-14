<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import FooterItem from "@/components/FooterItem.vue";
</script>

<template>
    <NavBar :currentPage.number="1"/>
    <RouterView />
    <FooterItem />
</template>

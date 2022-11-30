<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import FooterItem from "@/components/FooterItem.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
    <SideBar/>
    <NavBar :currentPage.number="1"/>
    <RouterView />
    <FooterItem />
</template>


<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import FooterItem from "@/components/FooterItem.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>

  <div class="page">
    <SideBar />
    <NavBar />
  <div class="content">
    <RouterView />
  </div>
  <FooterItem style="z-index: 100;"/>
  </div>

</template>

<style scoped>

.page{
  position: relative;
  min-height: 100vh;
}
.content {
  margin-left: 72px;
  padding-bottom: 200px;
}


</style>

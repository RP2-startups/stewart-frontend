<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import FooterItem from "@/components/FooterItem.vue";
import ImageCard from "../components/ImageCard.vue";
</script>

<template>
  <NavBar
    :list="[
      {
        name: 'Sobre',
        icon: 'jore',
      },
      {
        name: 'Contato',
        icon: 'jore',
      },
    ]"
  />
  <ImageCard text="Evite problemas ao criar sua Startup" 
  source="https://hub.pme-digital.pt/wp-content/uploads/2019/04/Flat-color-Modern-Isometric-Illustration-design-Startup.png"
/>
<ImageCard text="Agilidade de Criação"
source="https://hub.pme-digital.pt/wp-content/uploads/2019/04/Flat-color-Modern-Isometric-Illustration-design-Startup.png"
small
vertical
reverse/>
  <FooterItem/>
  <div class="content">
    <RouterView />
  </div>
  
</template>

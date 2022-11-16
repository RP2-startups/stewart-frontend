<script setup lang="ts">
import ImageCard from "../components/ImageCard.vue";
</script>

<template>

  <ImageCard title="Evite problemas ao criar sua Startup" 
  source="https://hub.pme-digital.pt/wp-content/uploads/2019/04/Flat-color-Modern-Isometric-Illustration-design-Startup.png"
/>
<section class="container">
  <div class="row text">
    <article class="col-lg-2">Diferenciais do nosso projeto</article>
<ImageCard title="Agilidade de Criação"
source="https://png.pngtree.com/png-clipart/20220131/original/pngtree-two-business-people-with-calendar-and-work-time-isometric-vector-png-image_7255641.png"
small
vertical
reverse/>

<ImageCard title="Aprenda com exemplos"
source="https://sdmsoftware.com/wp-content/uploads/2019/12/Home-character-icon-283x300.png"
small
vertical
reverse/>

<ImageCard title="Inicie sua ideia online"
source="http://objesoft.com.tr/wp-content/uploads/2017/06/proje-takip-obje-slide-1.png"
small
vertical
reverse/>

</div>
</section>

<ImageCard title="Publique e participe de ideias inovadoras"
body="Com o Stewart você poderá participar de projetos inovadores, publicar suas ideias, e reunir pessoas interessadas no seu projeto para formar sua equipe."
source="https://suruchetech.com/assets/images/banner-img.png"
transparent
titleSize="2.5rem"
/>

<ImageCard title="Ambiente seguro para suas ideias"
body="Conte com o Stewart para proteger seus projetos, divulgando seus dados apenas para as pessoas que você quiser."
source="https://www.ilantus.com/wp-content/uploads/2021/07/Secure-Web-Access-500x450-1-500x400.png"
reverse
transparent
titleSize="2.5rem"
/>

<section class="container">
  <article class="text-center text">
    Conheça alguns de nossos projetos
  </article>
  <!--Transformar em um componente depois que recebe os projetos do backend-->
  <div class="row">    
    <ImageCard title="Startup"
    marginTop="100px"
    source="https://seeklogo.com/images/C/circle-shape-company-logo-DF697037BE-seeklogo.com.png"
    small
    vertical
    reverse/>
    <ImageCard title="Business"
    source="https://seeklogo.com/images/C/circle-shape-company-logo-DF697037BE-seeklogo.com.png"
    small
    vertical
    reverse/>
    <ImageCard title="Company"
    source="https://seeklogo.com/images/C/circle-shape-company-logo-DF697037BE-seeklogo.com.png"
    small
    vertical
    reverse/>
    <ImageCard title="Store"
    source="https://seeklogo.com/images/C/circle-shape-company-logo-DF697037BE-seeklogo.com.png"
    small
    vertical
    reverse/>
  </div>
</section>
<br/>
</template>

<style>
@import "../assets/styles/base.css";
.text {
  font-family: 'Jost';
  font-size: 2rem;
}
</style>

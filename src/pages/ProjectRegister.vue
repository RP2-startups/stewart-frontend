<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import ProgressIndicator from "../components/ProgressIndicator.vue";
</script>
<template>
  <div class="register-container container">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-md-10 col-lg-8 col-sm-12">
        <ProgressIndicator />
      </div>
    </div>
    <div class="row d-flex flex-column align-items-center mt-5">
      <div class="col-md-10 col-lg-8 col-sm-12">
        <h1 class="page-section-title">
          Envie um convite para os integrantes do projeto:
        </h1>
      </div>
    </div>
    <div class="row d-flex flex-column align-items-center">
      <div class="col-md-10 col-lg-8 col-sm-12 mt-5">
          <SearchBar/>
      </div>
      <div class="col-md-2 col-lg-8 col-sm-12 mt-5">
        <button></button>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/styles/base.css";
input {}
.register-container {
  width: 65%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input-container {
  height: 2rem;
  width: 60%;
  background-color: white;
}
.input-register {
  height: 100%;
  width: 100%;
  border: none;
}
</style>

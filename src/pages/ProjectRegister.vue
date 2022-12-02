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
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col-md-8 col-lg-8 col-sm-12 mt-5">
          <SearchBar />
          <!--<button class="btn" style="background-color: #E94560">Pesquisar</button>-->
        </div>
        <div class="col-md-4 col-lg-4 col-sm-12 mt-5">
          <div class="btn-group">
            <button class="btn btn-secondary btn dropdown-toggle" type="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Cargo
            </button>
            <div class="dropdown-menu">
              <button class="dropdown-item" type="button">Idealizador</button>
              <button class="dropdown-item" type="button">Membro</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/styles/base.css";

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

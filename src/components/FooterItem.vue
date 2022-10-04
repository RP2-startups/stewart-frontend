<template>
  <footer class="footer-main pt-3 w-100">
    <div class="container">
      <div class="row footer-body">
        <div class="col-lg-6 col-sm-3 brand title-hammersmith">
          <h1>STEWART</h1>
        </div>
        <div class="col-lg-2 col-sm-3 item">
          <strong>Plataforma</strong>
          <ul>
            <li>Visão Geral</li>
            <li>Recursos</li>
            <li>Sobre nós</li>
          </ul>
        </div>
        <div class="col-lg-2 col-sm-3 item">
          <strong>Ajuda</strong>
          <ul>
            <li>Como funciona?</li>
            <li>Documentação</li>
            <li>Assistência</li>
          </ul>
        </div>
        <div class="col-lg-2 col-sm-3 item">
          <strong>Contatos</strong>
          <ul>
            <li>(11) 99999-9999</li>
            <li>email@usp.br</li>
          </ul>
        </div>
      </div>

      <row>
        <div class="col-lg-2 offset-lg-10 col-sm-4 offset-sm-8 item-social align-self-end py-2">
          <ul>
            <li class="d-inline-block">
              <img src="../assets/images/facebooklogo.webp" />
            </li>
            <li class="d-inline-block ms-3">
              <img src="../assets/images/instagram_icon.webp" />
            </li>
            <li class="d-inline-block ms-3">
              <img src="../assets/images/twitter_icon.png" />
            </li>
            <li class="d-inline-block ms-3">
              <img src="../assets/images/linkedin_icon.png" />
            </li>
          </ul>
        </div>
      </row>
    </div>
  </footer>
</template>

<style>
@import "../assets/styles/base.css";
.brand {
  align-items: initial;
}

.footer-main {
  font-family: "Jost", sans-serif;
  background-color: var(--color-cream);
  color: #16213e;
  
}

.item {
  text-align: left;
  padding-bottom: 2rem;
  word-wrap: break-word;
  font-size:small;
}

ul {
  list-style: none;
}

.item strong {
  font-size: medium;
  margin-left: 30px;
}

.footer-body {
  border-bottom: 0.12rem solid #16213e;
}

.item-social img {
  width: 20px;
  height: 20px;
}
</style>

<script lang="ts">
import Vue, { defineComponent } from "vue";
export default defineComponent({
  props: {
    list: null
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
});
</script>

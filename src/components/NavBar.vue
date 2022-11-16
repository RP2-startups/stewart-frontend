<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="stewart-main-navbar">
    <div class="d-flex align-items-center p-2 justify-content-between">
      <div id="navbar-logo">
        <RouterLink class="title-hammersmith" to=" ">STEWART</RouterLink>
      </div>
      <div>
        <SearchBar/>
      </div>
      <router-link to="/login" >
        <button class="btn btn-login text-light">LOGIN</button>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
@import "../assets/styles/base.css";

.menu {
  padding: 3rem;
  margin: 0;
  list-style-type: none;
  font-family: "Jost", "sans-serif";
  font-weight: bold;
  display: flex;
  align-items: center;
}

.menu :hover {
  background-color: var(--color-translucent-pink);
  cursor: pointer;
}

.menu-link:hover {
  background-color: #00000000;
}

#stewart-main-navbar {
  z-index: 2;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

#navbar-logo .title-hammersmith {
  font-size: 1.6rem;
  color: rgba(255, 255, 255);
}

.menu-item {
  padding: 0.625rem;
  height: 100%;
  margin-left: 0.625rem;
  margin: 0 0.625rem;
  margin-right: 0.625rem;
  font-size: 1rem;
  user-select: none;
  -webkit-user-select: none;
}

.menu-link {
  align-items: center;
  text-decoration: none;
  color: var(---color-text-light);
}

.menu-slider {
  background-color: var(--color-pink);
  position: absolute;
  height: 0.25rem;
  left: 0;
  transition: all ease 0.3s;
  margin-top: 3rem;
}

.btn-login {
  background: rgba(196, 196, 196, 0.15);
  padding-right: 2rem !important;
  padding-left: 2rem !important;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  font-size: 0.8rem;
  border-radius: 10px;
  border-color: #f8f9fa;
}

.btn-login a {
  font-family: "Jost", sans-serif;
  text-decoration: none;
  font-style: bold;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from './SearchBar.vue';
export default defineComponent({
    props: {
        currentPage: {
            type: Number,
            default: 0,
        },
        visibility: {
            type: Boolean,
            default: true,
        },
    },    
    components: { SearchBar }
});
</script>

<template v-if="open">
  <div class="wrapper" :class="`${is_expanded ? 'expanded' : ''}`">
    <div class="header">
      <h5 class="title" :class="`${is_expanded ? '' : 'hide'}`">STEWART</h5>
      <div class="toggle">
        <button
          class="menu-toggle-wrap"
          :class="`${is_expanded ? 'rotate' : ''}`"
          @click="toogleMenu()"
        >
          <img
            src="../assets/images/arrow_sidebar.png"
            alt="expand/shrink sidebar"
          />
        </button>
      </div>
    </div>

    <div class="menu">
      <router-link class="button" to="/">
        <span class=""
          ><img src="../assets/icons/home_outline.svg" class="icon"
        /></span>
        <span class="menu-text" :class="`${is_expanded ? 'show' : ''}`"
          >Home</span
        >
      </router-link>

      <router-link class="button" to="/my-projects">
        <span class=""
          ><img src="../assets/icons/project_icon.svg" class="icon"
        /></span>
        <span class="menu-text" :class="`${is_expanded ? 'show' : ''}`"
          >Projetos</span
        >
      </router-link>


      <router-link class="button" to="/register-project">
        <span class=""
          ><img src="../assets/icons/baseline-plus.svg" class="icon"
        /></span>
        <span class="menu-text" :class="`${is_expanded ? 'show' : ''}`"
          >Criar Projetos</span
        >
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/base.css";
.wrapper {
  padding: 1rem;
  position: fixed;
  z-index: 99;
  top: 5rem;
  min-height: 100vh;
  overflow: hidden;
  left: 0;
  width: calc(2rem + 40px);
  /*background-color: var(--color-background-dark-hover);*/
  background-color: transparent;
  transition: 0.3s ease-out;
}

.expanded {
  background-color: #071f3581;
  width: 240px;
}

.title {
  display: flex;
  align-items: flex-start;
  margin-bottom: -1.5rem;
}

.hide{
  display: none;
}

.menu-toggle-wrap {
  /*background-color: var(--color-background-dark-hover);*/
  background-color: transparent;
  margin-bottom: 1rem;
  border: 0px;
  transition: 0.5 ease-out;
}

.rotate {
  transform: rotate(180deg);
}

.toggle {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.toggle img {
  width: 32px;
  height: 32px;
}

.menu {
  margin: 0 -1rem;
}

.menu .button {
  max-height: 4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  color: var(--color-text-light);
}

.menu :hover {
  background-color: var(--color-background-dark-hover-hover);
}

.button .menu-text {
  opacity: 0;
  transition: 0.3s ease-out;
}

.show {
  opacity: 1 !important;
}

.icon {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
}

.router-link-exact-active {
  border-right: 5px solid var(--color-light-blue);
  background-color: var(--color-background-dark-hover-hover);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      is_expanded: false,
    };
  },
  methods: {
    toogleMenu() {
      this.is_expanded = !this.is_expanded;
    },
  },
});
</script>

<template>
  <section id="stewart-main-navbar">
    <div class="d-flex align-items-center p-2 justify-content-between">
      <div id="navbar-logo">
        <a class="title-hammersmith">STEWART</a>
      </div>
      <ul class="menu d-inline-flex">
        <li
          class="menu-item d-inline-flex"
          v-for="item in itens"
          :key="item.id"
          @click="sliderClicked(item.id)"
          :ref="'menu-item_' + item.id"
        >
          <a class="menu-link d-inline-flex">
            {{ item.name }}
          </a>
        </li>
      </ul>
      <button class="btn btn-login">
        <a class="text-light"> LOGIN </a>
      </button>
    </div>

    <div
      class="menu-slider"
      :style="{ left: positionToMove, width: sliderWidth }"
    ></div>
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
export default defineComponent({
  props: {
    list: null,
    visibility: {
      type: Boolean,
      default: true,
    },
  },
  mounted: function () {
    this.loadList();
  },

  data() {
    return {
      sliderPosition: 0,
      selectedElementWidth: 0,
      selectedIndex: 0,
      itens: [{ id: 1, icon: "", name: "Início" }],
    };
  },

  created: function() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed: function() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      if(!this.selectedIndex) {
        return;
      }
      let element = document.getElementsByClassName("menu-slider")[0];
      let transitionValue = window.getComputedStyle(element).getPropertyValue("transition-duration");
      if(transitionValue != "0s")
        element.setAttribute("style", "transition-duration: 0s");
      this.sliderIndicator(this.selectedIndex);
    },
    sliderClicked(id: number) {
      let element = document.getElementsByClassName("menu-slider")[0];
      let transitionValue = window.getComputedStyle(element).getPropertyValue("transition-duration");
      if(transitionValue != "0.3s" && id != this.selectedIndex)
        element.setAttribute("style", "transition-duration 0.3s;");
      this.sliderIndicator(id);
    },
    sliderIndicator(id: number) {
      let element = (this.$refs[`menu-item_${id}`] as any)[0];
      this.sliderPosition = element.offsetLeft;
      this.selectedElementWidth = element.offsetWidth;
      this.selectedIndex = id;
    },
    loadList() {
      var count: number = this.itens.length;
      for (let i = 0; i < this.list.length; i++) {
        const element = this.list[i];
        var item = { id: ++count, icon: element.icon, name: element.name };
        this.itens.push(item);
      }
    },
  },
  computed: {
    positionToMove() {
      return this.sliderPosition + "px";
    },
    sliderWidth() {
      return this.selectedElementWidth + "px";
    },
  },
});
</script>

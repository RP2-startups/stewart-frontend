<template>
  <section id="stewart-main-navbar">
    <div class="d-flex align-items-center">
      <div id="navbar-logo">
        <a class="title-hammersmith">STEWART</a>
      </div>
      <ul class="menu d-inline-flex">
        <li
          class="menu-item d-inline-flex"
          v-for="item in itens"
          :key="item.id"
          @click="sliderIndicator(item.id)"
          :ref="'menu-item_' + item.id"
        >
          <a class="menu-link d-inline-flex">
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="menu-slider"
      :style="{ left: positionToMove, width: sliderWidth }"
    ></div>
  </section>
</template>

<style scoped>
@import "../assets/base.css";

.menu {
  padding: 3rem;
  margin: 0;
  list-style-type: none;
  font-family: "Jost", "sans-serif";
  font-weight: bold;
  display: flex;
  align-items: center;
}

#stewart-main-navbar {
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#navbar-logo .title-hammersmith {
  font-size: 3rem;
  color: white;
}

.menu-item {
  padding: 0.625rem;
  height: 100%;
  margin-left: 0.625rem;
  margin: 0 0.625rem;
  margin-right: 0.625rem;
  font-size: 1.5625rem;
}

.menu-item :hover {
  background-color: var(--color-background-dark-hover);
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
  methods: {
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

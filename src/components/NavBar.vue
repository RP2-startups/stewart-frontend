<template>
  <div v-if="visibility">
    <ul class="menu d-inline-flex">
      <div
        class="menu-slider"
        :style="{ left: positionToMove, width: sliderWidth }"
      ></div>
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
</template>

<style scoped>
@import "../assets/main.css";
.menu {
  background-color: var(--color-background-dark);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  list-style-type: none;
}

.menu-item {
  padding: 10px;
  height: 100%;
  margin-left: 10px;
  margin-right: 10px;
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
  bottom: 0;
  left: 0;
  margin: auto;
  width: 3rem;
  transition: all ease 0.3s;
}
</style>

<script lang="ts">
  
import Vue, { defineComponent } from "vue";

export default defineComponent({
  props:{
    list : null,
    visibility: {
      type: Boolean,
      default: true
    }
  },
  mounted:function(){
    this.loadList()
  },

  data() {
      return {
      sliderPosition: 0,
      selectedElementWidth: 0,
      selectedIndex: 0,
      itens: [
          { id: 1, icon: "jorge", name: "jorginho" },
          { id: 2, icon: "amadeus", name: "amadeus" },
          { id: 3, icon: "acaca", name: "acac" },
          { id: 4, icon: "asdasd", name: "asdsad" },
      ],
      };
  },
  methods: {
      sliderIndicator(id: number) {
      let element = (this.$refs[`menu-item_${id}`] as any)[0]
      this.sliderPosition = element.offsetLeft
      this.selectedElementWidth = element.offsetWidth
      this.selectedIndex = id
      },
      loadList(){
        var count: number = this.itens.length
        for (let i = 0; i < this.list.length; i++) {
          const element = this.list[i];
          var item = {id: ++count,icon:element.icon, name:element.name}
          this.itens.push(item)
        }
      }
  },
  computed: {
      positionToMove(){
          return this.sliderPosition+"px"
      },
      sliderWidth(){
          return this.selectedElementWidth+"px"
      }
  },
  
});
</script>

<script setup lang="ts">
  import ImageCard from "../components/ImageCard.vue";
</script>

<template>
  <div ref="section" class="section">
    <div @click="expandSection" class="d-flex section-title">
      <p class="flex-fill"> Projetos: </p>
      <p> temp </p>
    </div>
    <div class="section-hovered section-items row" :class="rowColsClass">
      <div class="col" v-for="card in cards">
        <ImageCard class="pt-1" :width="cardWidth" :height="cardHeight"
          :title="card.name" :body="card.desc" :source="card.icon" image-border />
      </div>
    </div>
  </div>
</template>

<style>
  @import "../assets/styles/base.css";

  .section {
    font-family: 'Jost';
    font-weight: bolder;
    margin-bottom: 2rem;
    overflow: hidden;
  }

  .section-title {
    font-size: 2rem;
    padding-top: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .section-title:hover {
    background-color: var(--color-translucent-pink);
    cursor: pointer;
  }
  .section-title:hover + .section-hovered {
    background-color: var(--color-translucenter-pink)
  }

  .section-items {
    display:inline-flex;
    padding-top: 0.5rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    beforeUpdate() {
        console.log(this.$route.params.input);
    },
    data() {
      return {
        projectsHidden: false,
        rowColsClass: 'row-cols-1',
        cardWidth: 240,
        cardHeight: 400,
        cards: [
          { name: "Véio Sorridente", desc: "aaaaaaaa aaaaaa aaaaaaaaa Lorem Ipsdum Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam", icon: "https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" },
          { name: "Véio Sorridente", desc: "Lorem Ipsdum Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam", icon: "https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" },
          { name: "Véio Sorridente", desc: "Lorem Ipsdum Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam", icon: "https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" },
          { name: "Véio Sorridente", desc: "Lorem Ipsdum Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam", icon: "https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" },
          { name: "Véio Sorridente", desc: "Lorem Ipsdum Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam", icon: "https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" },
          { name: "Véio Sorridente", desc: "Lorem Ipsdum Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam", icon: "https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" },
          { name: "Véio Sorridente", desc: "Lorem Ipsdum Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam", icon: "https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" },
          { name: "Véio Sorridente", desc: "Lorem Ipsdum Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam", icon: "https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" },
          { name: "Véio Sorridente", desc: "Lorem Ipsdum Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam", icon: "https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" },
          { name: "Véio Sorridente", desc: "Lorem Ipsdum Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam", icon: "https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" },

        ],
      };
    },
    mounted() {
      this.calcCardsPerRow();
      window.addEventListener("resize", this.calcCardsPerRow);
    },
    methods: {
      expandSection() {},
      calcCardsPerRow() {
        let remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        let sectionEl = this.$refs.section as Element;
        let availableWidth = sectionEl.clientWidth - 6*remSize;
        let cardsPerRow = Math.floor(availableWidth/this.cardWidth);
        this.rowColsClass = (cardsPerRow <= 6) ? "row-cols-" + cardsPerRow : "row-cols-6"
        console.log(this.rowColsClass);
      },
    }
});
</script>

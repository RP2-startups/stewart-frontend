<script setup lang="ts">
  import ImageCard from "../components/ImageCard.vue";
</script>

<template>
  <div class="section">
    <div @click="expandSection" class="d-flex section-title">
      <p class="flex-fill"> Projetos: </p>
      <p> temp </p>
    </div>
    <div class="section-hovered section-items">
      <div class="row">
        <ImageCard class="col-md-2" :width="cardWidth" :height="cardHeight" v-for="card in cards"
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
    padding-top: 0.5rem;
    padding-left: 3rem;
  }
  .section-items .image-card {
    margin-right: 3rem;
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
        cardWidth: 280,
        cardHeight: 400,
        cards: [
          { name: "Véio Sorridente", desc: "Lorem Ipsdum Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam", icon: "https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" },
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
    methods: {
      expandSection() {},
    }
});
</script>

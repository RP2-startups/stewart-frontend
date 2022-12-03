<script setup lang="ts">
  import ImageCard from "../components/ImageCard.vue";
</script>

<template>
  <div class="section">
    <div @click="expandSection" class="d-flex section-title">
      <p class="flex-fill"> Projetos: </p>
      <p> temp </p>
    </div>
    <div @click="expandSection" class="d-flex justify-content-between section-hovered section-items">
      <ImageCard title="Idoso Sorrindo" imageBorder source="https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256"
      source2="https://i.seadn.io/gae/0A54WU7el_5PyPxVWe5MQWkZqTXyRulMMyVLFbbaoEsIiTDg1dbJO-2HEM3t8GSP0qjYBZA78lsO1kCq18cI0Sy9BnZuQxe555Cf?auto=format&w=1920"
      body="Lorem ipsum dolor sit amet. Qui autem omnis ad minima exercitationem ut perferendis maxime et cumque expedita et mollitia ipsa. Qui recusandae quaerat id consequatur placeat et accusamus consequuntur est dolore sint eos ipsa accusantium id molestiae recusandae et laboriosam totam" />
      <ImageCard title="test" imageBorder source="https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256"/>
      <ImageCard title="test" imageBorder source="https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256"/>
      <ImageCard title="test" imageBorder source="https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256"/>
    </div>
  </div>
</template>

<style>
  @import "../assets/styles/base.css";

  .section {
    font-family: 'Jost';
    font-weight: bolder;
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.9rem;
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
        searchResults: [{ id: 0, name: "", desc: "", icon: "" }],
      };
    },
    methods: {
      expandSection() {}
    }
});
</script>

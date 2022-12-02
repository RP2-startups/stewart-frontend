<script setup lang="ts">
  import ImageCard from "../components/ImageCard.vue";
  import ProjectHeader from "../components/ProjectHeader.vue";
</script>

<template>
  <div class="section">
    <div @click="expandSection" class="d-flex section-title">
      <p class="flex-fill"> Projetos: </p>
      <p> temp </p>
    </div>
    <div @click="expandSection" class="d-flex justify-content-between section-hovered">
      <ImageCard title="test" vertical reverse source="https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256"/>
      <ImageCard title="test" vertical reverse source="https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256"/>
      <ImageCard title="test" vertical reverse source="https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256"/>
    </div>
  </div>
</template>

<style>
  @import "../assets/styles/base.css";

  .section {
    border-radius: 50px;
    font-family: 'Jost';
    font-weight: bolder;
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.9rem;
    padding-top: 0.9rem;
    padding-left: 1.7rem;
    padding-right: 1.7rem;
  }
  .section-title:hover {
    background-color: var(--color-translucent-pink);
    cursor: pointer;
  }
  .section-title:hover + .section-hovered {
    background-color: var(--color-translucent-pink)
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

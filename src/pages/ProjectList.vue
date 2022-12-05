<script setup lang="ts">
  import ImageCardDisplay from "../components/ImageCardDisplay.vue";
</script>

<template>
  <ImageCardDisplay class="image-card-display" :cardWidth="cardWidth" :cardHeight="cardHeight" :cardsProp="cards" />
</template>

<style>

.image-card-display {
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
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
});
</script>

<template>
  <input type="text" v-model="input" placeholder="Search fruits..." />
  <!--<div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
    <p>{{ fruit }}</p>
  </div>
  <div class="item error" v-if="input&&!filteredList().length">
    <p>No results found!</p>
  </div>-->
</template>

<style scoped>

</style>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent ({
    props: {
      input: {
        type: String,
        required: false,
      }
    },
    data() {
      return {
      }
    }
  });
</script>

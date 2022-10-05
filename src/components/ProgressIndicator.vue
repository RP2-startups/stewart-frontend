<template>
  <nav class="progress-indicator">
    <div class="progress-item progress-item-selected">
      <img
        class="progress-item-icon"
        src="../assets/icons/progress-indicator-screen.svg"
      />
      <span class="mt-2">Configurações</span>
      <!-- <button
          class="progress-item-button progress-item-button-selected"
        ></button> -->
    </div>
    <div class="progress-item">
      <img
        class="progress-item-icon"
        src="../assets/icons/progress-indicator-screen.svg"
      />
      <span class="mt-2">Dados</span>
      <!-- <button class="progress-item-button"></button> -->
    </div>
  </nav>
</template>
<style>
@import "../assets/styles/base.css";

.progress-indicator {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--color-textonwhite);
  padding: 2rem;
  border-radius: 0 0 1.5rem 1.5rem;
}

.progress-item {
  padding: 1rem;
  min-width: 8rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--color-purple);
  border-bottom: 0.5rem solid transparent;
}

.progress-item-icon {
  width: 2rem;
}

.progress-item-selected {
  border-bottom: 0.5rem solid var(--color-pink);
}
</style>

<!-- <script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
      props: {

        ProgressItems: {
          type: Array,
        },
      },
    mounted: function () {var x = this.$el },
    data() { },
});
</script> -->

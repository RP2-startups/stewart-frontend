<template>
  <div class="progress-indicator-container row">
    <div class="progress-item col-3">
      <img src="../assets/icons/progress-indicator-screen.svg" />
      <button class="progress-item-button"></button>
    </div>
    <div class="progress-item col-3">
      <img src="../assets/icons/progress-indicator-screen.svg" />
      <button class="progress-item-button"></button>
    </div>
    
  </div>
</template>
<style>
@import "../assets/styles/base.css";

.progress-indicator-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--color-light-blue);
  width: 100%;
  height: 6rem;
}

.progress-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-purple);
}
.progress-item-button {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--color-cream);
}
</style>
<script lang="ts">
export default {
  data() {
    return;
  },
};
</script>
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

<template>
  <div class="container">
  <div class="row mt-2 mb-4 image-card">
    <div class="col-lg-6 col-sm-12 col-sm-3 p-4 pt-5 ps-5 ms-4">
      {{ text }}
    </div>
    <div class="col-lg-5 col-sm-12 col-sm-9">
      <b-img :src="source" fluid alt="Responsive image"></b-img>
    </div>
  </div>
</div>
</template>
<style>
@import "../assets/styles/base.css";

.image-card {
  background: linear-gradient(135deg, #3A2369 0%, #78619B 100%);
border-radius: 25px;
  font-size: 4rem;
  font-family: 'Jost';
  font-weight: bolder;
  color: white;
}

</style>
<script lang="ts">
  import Vue, { defineComponent } from "vue";
  export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
});
</script>
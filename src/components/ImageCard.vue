<template>
  <div class="container image-card"
  :class="small && 'col-lg-2 image-card-small'">
  <div class="row mt-2 mb-4 "
  :class="reverse && 'image-card-reverse'">
    <div class="col-lg-6 col-sm-12 col-sm-3 p-4 pt-5 ps-5 ms-4"
    :class="vertical && 'col-lg-12 pt-0'">
      {{ text }}
    </div>
    <div class="col-lg-5 col-sm-12 col-sm-9"
    :class="vertical && 'col-lg-12 text-center'">
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
  flex-direction: row;
}

.image-card-reverse {
  flex-direction: column-reverse;
}

.image-card-small {
  font-size: medium !important;
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
    },
    reverse: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
});
</script>
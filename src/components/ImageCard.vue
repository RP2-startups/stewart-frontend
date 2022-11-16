<template>
  <div class="container image-card mt-2 pt-4 pb-4 mb-4"
  :class="(small && 'col-lg-2 image-card-small') || (transparent && 'image-card-transparent')"
  :style="{ 'font-size': titleSize }">

  <div class="row"
  :class="(reverse && vertical && 'column-reverse') || (reverse && !vertical && 'row-reverse')">

    <div class="col-lg-6 col-sm-12 ps-5 card-body"
    :class="vertical && 'w-100'">

      <text class="card-title">{{ title }}</text>
      <p class="card-text">{{ body }}</p>
    </div>

    <div class="col-lg-5 col-sm-12"
    :class="vertical && 'w-100 text-center'">

      <b-img :src="source" fluid alt="Responsive image"></b-img>
      
    </div>
  </div>
</div>
</template>
<style>
@import "../assets/styles/base.css";
.card-title {
  margin: 0;
  padding: 0;
}
.image-card {
  background: linear-gradient(135deg, #3A2369 0%, #78619B 100%);
  border-radius: 25px;
  font-family: 'Jost';
  font-weight: bolder;
  color: white;
  flex-direction: row;
}

.image-card-transparent {
  background: transparent;
}

.card-text {
  font-size: 1.2rem;
  font-weight: normal;
}

.column-reverse {
  flex-direction: column-reverse;
}

.row-reverse {
  flex-direction: row-reverse;
}

.image-card-small {
  font-size: medium !important;
}

.image-card-small text {
  font-size: 1rem;
}

</style>
<script lang="ts">
  import Vue, { defineComponent } from "vue";
  export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      default: ""
    },
    source: {
      type: String,
      required: true
    },
    titleSize: {
      type: String,
      default: "5rem"
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
    },
    transparent: {
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
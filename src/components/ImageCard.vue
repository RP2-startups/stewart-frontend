<template>
  <div ref="card" class="image-card mt-2 mb-4" :style="cssProps">
    <div>
      <img class="image" :class="{ 'img-thumbnail': imageBorder }" :src="source" fluid alt="Responsive image">
    </div>
    <p class="card-title" :style="{ 'font-size': titleFontSize }"> {{ title }} </p>
    <p ref="body" class="card-body"> {{ bodyText }} </p>
</div>
</template>

<style>
@import "../assets/styles/base.css";

.image-card {
  background: var(--color-purple);
  border-radius: 3px;
  min-width: var(--width);
  min-height: var(--height);
  max-height: var(--height);
  font-family: 'Jost';
}

.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  min-width: 120px;
  width: 25%;
}

.card-title {
  font-weight: bolder;
  text-align: center;
  margin-top: 3px;
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.card-body {
  font-size: 13.5px;
  font-weight: bold;
  line-height: 20px;
  text-align: justify;
  text-overflow: clip;
  overflow: auto;
  margin-top: 3px;
  margin-left: 1rem;
  margin-right: 1rem;
}

</style>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
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
    source2: {
      type: String,
      default: ''
    },
    titleFontSize: {
      type: String,
      default: "25px"
    },
    imageBorder: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bodyText: this.body,
      maxDescLength: 280,
    };
  },
  mounted() {
    if(this.bodyText.length > this.maxDescLength)
      this.handleTextOverflow();
  },
  methods: {
    handleTextOverflow() {
      let charsUntilNewspace = 0;
      for(let i = this.maxDescLength; this.body[i] != ' '; i--)
        charsUntilNewspace++
      this.bodyText = this.body.slice(0, this.maxDescLength - charsUntilNewspace);
      this.bodyText += "..."
    }
  },
  computed: {
    cssProps() {
      return {
        '--width': this.width + 'px',
        '--height': this.height + 'px',
      }
    }
  },
});
</script>

<template>
  <div ref="card" class="image-card mt-2 mb-4">
    <div>
      <!--<img class="image-banner" :src="source2" fluid>-->
      <img class="image" :class="{ 'img-thumbnail': imageBorder }" :src="source" fluid alt="Responsive image">
    </div>
    <p class="card-title" :style="{ 'font-size': titleSize }"> {{ title }} </p>
    <p ref="body" class="card-body"> {{ bodyText }} </p>
</div>
</template>

<style>
@import "../assets/styles/base.css";

.image-card {
  background: var(--color-purple);
  border-radius: 3px;
  width: 280px;
  height: 400px;
  font-family: 'Jost';
}

/*
.images-parent {
  position: relative;
  top: 0;
  left: 0;
}
.image-banner {
  position: relative;
  top: 0;
  left: 0;
  max-width: 200%;
  min-height: auto;
}
*/
.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  min-width: 120px;
  width: 45%;
}

.card-title {
  font-weight: bolder;
  text-align: center;
  margin-top: 3px;
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
}

.card-body {
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
  text-align: justify;
  overflow: hidden;
  margin-top: 3px;
  margin-left: 1rem;
  margin-right: 1rem;
}

</style>

<script lang="ts">
  import { defineComponent } from "vue";
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
    source2: {
      type: String,
      default: ''
    },
    titleSize: {
      type: String,
      default: "29px"
    },
    imageBorder: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bodyText: this.body
    };
  },
  mounted() {
    if(this.bodyText.length != 0) {
      this.handleTextOverflow();
      window.addEventListener("resize", this.handleTextOverflow);
    }
  },
  methods: {
    handleTextOverflow() {
      let fontSize = 15;
      let lineHeight = 20;
      let cardEl = this.$refs.card as Element;
      let cardWidthStr = window.getComputedStyle(cardEl).getPropertyValue('width');
      let cardWidth: number = +cardWidthStr.slice(0, cardWidthStr.indexOf('p'));
      let cardHeightStr = window.getComputedStyle(cardEl).getPropertyValue('height');
      //let cardHeight: number = +cardHeightStr.slice(0, cardHeightStr.indexOf('p'));

      let lineCount = 1, lineStartIndex = 0, pixelCount = 0;
      for(let i = 0; i < this.body.length; i++) {
        pixelCount += fontSize;
        if(pixelCount >= cardWidth) {
          lineCount++;
          if(lineCount * lineHeight >= 320) {
            this.bodyText = this.body.slice(0, lineStartIndex);
            this.bodyText += "..."
            return
          }
          lineStartIndex = i;
          pixelCount = 0;
        }
      }

      this.bodyText = this.body;
    }
  },
  computed: {},
});
</script>

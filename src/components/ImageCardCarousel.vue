<script setup lang="ts">
  import ImageCard from "../components/ImageCard.vue";
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide } from 'vue3-carousel'
</script>

<template>
  <div ref="section" class="section">
    <div class="d-flex section-title">
      <p class="flex-fill"> {{ title }} </p>
    </div>
    <div class="d-flex section-hovered" id="box">
      <carousel style="width: 100%" :items-to-show="cardsPerRow+0.6" wrap-around snapAlign="start">
        <slide v-for="(card, index) in cards" :key="index" slideWidth="100px">
          <div class="section-items row">
            <div class="col">
              <ImageCard class="pt-1" :width="cardWidth" :height="cardHeight"
                :title="card.name" :body="card.desc" :source="card.icon" image-border />
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<style>
  @import "../assets/styles/base.css";
  .section {
    font-family: 'Jost';
    font-weight: bolder;
  }
  .section-title {
    background-color: var(--color-purple-dark);
    font-size: 2rem;
    padding-top: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .section-title:hover {
    background-color: var(--color-translucent-pink);
    cursor: pointer;
  }
  .section-title:hover + .section-hovered {
    border-color: var(--color-translucenter-pink) !important;
  }

  .section-items {
    max-height: 450px;
  }
  #box {
    background-color: var(--color-translucent-background-dark);
    border-width: 2px;
    border-top-width: 0px;
    border-style: solid;
    border-color: var(--color-purple-dark);
    overflow-y: clip;
    overflow-x: hidden;
  }
</style>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    props: {
      cardWidth: {
        type: Number,
        required: true
      },
      cardHeight: {
        type: Number,
        required: true
      },
      cardsProp: {
        type: Array,
        //required: true
      },
      title: {
        type: String,
        required: true
      },
      notFoundText: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isCollapsed: false,
        cardsPerRow: 1,
        cards: [{name: "", desc: "", icon: ""}],
      };
    },
    created() {
        this.cards = this.cardsProp as any;
    },
    mounted() {
      this.calcCardsPerRow();
      window.addEventListener("resize", this.calcCardsPerRow);
    },
    methods: {
      calcCardsPerRow() {
        let remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        let sectionEl = this.$refs.section as Element;
        let availableWidth = sectionEl.clientWidth - 16*remSize;
        this.cardsPerRow = Math.floor(availableWidth/this.cardWidth);
      },
    },
  });
</script>
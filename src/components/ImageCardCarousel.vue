<script setup lang="ts">
  import ImageCard from "../components/ImageCard.vue";
</script>

<template>
  <div ref="section" class="section">
    <div class="d-flex section-title">
      <p class="flex-fill"> {{ title }} </p>
    </div>
    <div class="section-hovered" id="box">
      <div v-if="cards.length > 0" class="section-items row" :class="rowColsClass">
        <div class="col" v-for="card in cards">
          <ImageCard class="pt-1" :width="cardWidth" :height="cardHeight"
            :title="card.name" :body="card.desc" :source="card.icon" image-border />
        </div>
      </div>
      <div v-else class="query-not-found">
        {{ notFoundText }}
      </div>
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
    padding-top: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    height: 800px;
  }
  #box {
    background-color: var(--color-translucent-background-dark);
    border-width: 2px;
    border-top-width: 0px;
    border-style: solid;
    border-color: var(--color-purple-dark);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .query-not-found{
    padding: 3rem;
    font-size: 3rem;
    text-align: center;
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
        cards: [{ name: "Among Us", desc: "Among Us é um jogo", icon: "https://preview.redd.it/otcm08c8oyy51.jpg?auto=webp&s=7924c636151996440520b3a9c94e70f59792491e" }],
        rowColsClass: 'row-cols-1',
      };
    },
    created() {
        //this.cards = this.cardsProp as any;
    },
    mounted() {
      this.calcCardsPerRow();
      window.addEventListener("resize", this.calcCardsPerRow);
    },
    methods: {
      calcCardsPerRow() {
        let remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        let sectionEl = this.$refs.section as Element;
        let availableWidth = sectionEl.clientWidth - 6*remSize;
        this.cardsPerRow = Math.floor(availableWidth/this.cardWidth);
        this.rowColsClass = (this.cardsPerRow <= 6) ? "row-cols-" + this.cardsPerRow : "row-cols-6"
      },
    },
  });
</script>
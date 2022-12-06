<script setup lang="ts">
  import ImageCard from "../components/ImageCard.vue";
</script>

<template>
  <div ref="section" class="section">
    <div class="d-flex section-title" @click="isCollapsed = !isCollapsed" data-bs-toggle="collapse"
    role="button" data-bs-target="#projectsCollapse" aria-expanded="true" aria-controls="projectsCollapse">
      <p class="flex-fill"> Projetos: </p>
      <img src="../assets/images/arrow-back-white.png" class="collapse-arrow" :class="{'collapsed-arrow': isCollapsed}">
    </div>
    <div class="collapse show section-hovered" id="projectsCollapse">
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

  .collapse-arrow {
    margin-top: 0.3rem;
    width: 1.92rem;
    height: 2.5rem;
    transform: rotate(270deg);
    transition: transform 0.1s ease;
  }
  .collapsed-arrow {
    margin-top: 0.25rem;
    transform: rotate(180deg);
  }

  .section-items {
    padding-top: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    height: 800px;
  }
  #projectsCollapse {
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
        cards: [{ name: "", desc: "", icon: "" }],
        rowColsClass: 'row-cols-1',
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
        let availableWidth = sectionEl.clientWidth - 6*remSize;
        let cardsPerRow = Math.floor(availableWidth/this.cardWidth);
        this.rowColsClass = (cardsPerRow <= 6) ? "row-cols-" + cardsPerRow : "row-cols-6"
      },
    },
  });
</script>

<template>
    <div class="container-fluid">
      <ul class="menu d-inline-flex">
        <li
          class="menu-item d-inline-flex"
          v-for="item in items"
          :key="item.id"
          @click="sliderClicked(item.id)"
          :ref="'menu-item_' + item.id"
        >
          <RouterLink
            class="menu-link d-inline-flex"
            :class="{ active: item.id == selectedIndex }"
            :to="item.comp"
          >
            {{ item.name }}
          </RouterLink>
        </li>
        <div
          class="menu-slider"
          :style="{ left: positionToMove, width: sliderWidth }"
        ></div>
        <div class="item-social align-self-end py-2">
          <ul v-for="social in socials" :key="social.id">
            <li class="d-inline-block">
              <img :src="getUrl(social.path)" />
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </template>

  <style scoped>
  @import "@/assets/styles/base.css";

  .menu {
    padding: 0;
    margin: 0;
    list-style-type: none;
    font-family: "Jost", "sans-serif";
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .menu-link {
    align-items: center;
    text-decoration: none;
    color: var(---color-text-light);
  }

  .menu-item {
    padding: 0.625rem;
    height: 100%;
    margin-inline: -0.625rem;
    margin: 0 0.625rem;
    margin-right: 0.625rem;
    font-size: 1rem;
    user-select: none;
    -webkit-user-select: none;
  }

  .menu .active {
    margin-inline: -0.625rem;
    padding: 0.625rem;
  }

  .menu-slider {
    background-color: var(--color-pink);
    position: absolute;
    height: 0.25rem;
    left: 0;
    transition: all ease 0.3s;
    margin-top: 3rem;
  }

  .item-social {
    position: absolute;
    right: min(10vw, 100px);
  }
  .item-social ul {
      display: inline-block;
      list-style: none;
  }
  .item-social img {
    width: 30px;
    height: 30px;
  }
  </style>

  <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    props: {
      currentContent: {
        type: Number,
        default: 1,
      },
      facebookVisibility: {
        type: Boolean,
        default: true,
      },
      instagramVisibility: {
        type: Boolean,
        default: true,
      },
      twitterVisibility: {
        type: Boolean,
        default: true,
      },
      linkedinVisibility: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        sliderPosition: 0,
        selectedElementWidth: 0,
        selectedIndex: 0,
        items: [
          {
            id: 1,
            name: "Integrantes",
            comp: "members",
          },
          {
            id: 2,
            name: "Posts",
            comp: "members",
          },
          {
            id: 3,
            name: "Documentos",
            comp: "files",
          },
        ],
        itemsSocial: [
          {
            id: 1,
            path: "facebooklogo.webp",
            visibility: true,
          },
          {
            id: 2,
            path: "instagram_icon.webp",
            visibility: true,
          },
          {
            id: 3,
            path: "twitter_icon.png",
            visibility: true,
          },
          {
            id: 4,
            path: "linkedin_icon.png",
            visibility: true,
          },
        ],
      };
    },
    methods: {
      sliderClicked(id: number) {
        let element = document.getElementsByClassName("menu-slider")[0];
        let transitionValue = window
          .getComputedStyle(element)
          .getPropertyValue("transition-duration");
        if (transitionValue != "0.3s" && id != this.selectedIndex)
          element.setAttribute("style", "transition-duration 0.3s;");
        this.sliderIndicator(id);
      },
      sliderIndicator(id: number) {

        let element = (this.$refs[`menu-item_${id}`] as any)[0];
        this.sliderPosition = element.offsetLeft;
        this.selectedElementWidth = element.offsetWidth;
        this.selectedIndex = id;

      },
      getUrl(path : String){
          return new URL(`../assets/images/${path}`,import.meta.url).href
      }
    },
    computed: {
      positionToMove() {
        return this.sliderPosition + "px";
      },
      sliderWidth() {
        return this.selectedElementWidth + "px";
      },
      socials() {
        this.itemsSocial[0].visibility = this.facebookVisibility;
        this.itemsSocial[1].visibility = this.instagramVisibility;
        this.itemsSocial[2].visibility = this.twitterVisibility;
        this.itemsSocial[3].visibility = this.linkedinVisibility;
        var filterList = this.itemsSocial.filter(item => item.visibility == true)
        return filterList
      },
    },
    mounted: function () {
      this.sliderIndicator(this.currentContent);
    },
  });
  </script>

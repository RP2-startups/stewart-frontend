<script setup lang="ts">
    import PostCard from "@/components/PostCard.vue";
</script>

<template>
    <p class="fs-1">Postagens</p>
    <ul class="proj-members d-inline-flex">
        <li
        class="me-4"
        v-for="item in items"
        :key="item.id"
        :ref="'person-card-item_' + item.id"
        >
            <PostCard />
        </li>
    </ul>
</template>

<style scoped>
.proj-members {
    padding: 0;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    list: {
      default: [
        { 
          name: "felmateos",
          func: "projeto",
        },
        { 
          name: "rfv",
          func: "navbar",
        },
        { 
          name: "gabe",
          func: "back",
        },
      ],
    },
  },
  created: function () {
    this.loadCards();
  },
  data() {
    return {
      items: [{id: 0, name: "" , func: ""}],
    };
  },
  methods: {
    loadCards() {
      this.items.pop();
      var count: number = this.items.length;
      for (const element of this.list) {
        var item = { id: ++count, name: element.name , func: element.func};
        this.items.push(item);
      }
    },
  },
});
</script>
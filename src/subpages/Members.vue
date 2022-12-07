<script setup lang="ts">
import PersonCard from "@/components/PersonCard.vue";
</script>

<template>
  <p class="fs-1">Integrantes</p>
  <ul class="proj-members d-inline-flex">
    <li class="me-4" v-for="item in items">
      <PersonCard :name="item.user.name" :func="item.is_adm" :pic="item.user.profile_picture" />
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
import ProjectDataService from "@/services/ProjectDataService";

interface User{
  name: string;
  profile_picture: string;
}

interface Pending {
  user: User,
  is_adm: boolean;
  is_accepted: string;
}

interface Member{
  user: User
  is_adm: boolean;
}

export default defineComponent({
  created: function () {
    this.loadCards();
  },
  data() {
    return {
      items: [] as Member[],
    };
  },
  methods: {
    loadCards() {
      ProjectDataService.get(this.$route.params.id.toString())
        .then((response) => {
          let r = response.data;
          
          r.projectParticipations.forEach((element: Pending) => {
            if (element.is_accepted == "accepted") {
             let path = element.user.profile_picture.replace(".","http://localhost:3001")
              this.items.push({"user":{"name" : element.user.name, "profile_picture": path }, "is_adm": element.is_adm});
            }
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
</script>

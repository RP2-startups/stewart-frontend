<template>
  <div id="proj-header-top">
    <!--banner-->
    <img :src="banner" class="img-fluid w-100" id="proj-banner" alt="banner" />

    <!--icone do projeto-->
    <img :src="projectPic" class="img-thumbnail rounded" id="proj-icon" alt="icon" />
  </div>
  <!--nome do projeto-->
  <div id="proj-header-bottom">
    <div id="proj-top-row" class="row">
      <!--nome do projeto-->
      <div class="col">
        <p id="proj-title" class="fs-1 text-break">{{ title }}</p>
      </div>

      <!--estatisticas do projeto-->
      <div class="col d-flex justify-content-end">
        <ul id="proj-stats" class="d-inline-flex">
          <li class="proj-stat text-center ms-4">
            <button v-if="request" class="btn btn-primary" @click="sendInvite">Pedir para participar</button>
          </li>
          <li class="proj-stat text-center ms-4">
            <p class="proj-stat-num fs-2">
              20
            </p>
            <p class="proj-stat-desc fs-5">
              Publicações
            </p>
          </li>
          <li class="proj-stat text-center ms-4">
            <p class="proj-stat-num fs-2">
              {{ members }}
            </p>
            <p class="proj-stat-desc fs-5">
              Membros
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div id="proj-bot-row" class="row">
      <!--descricao do projeto-->
      <div class="col">
        <p class="fs-5">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
#proj-header-top {
  position: relative;
}

#proj-banner {
  display: block;
  max-height: 500px !important;
}

#proj-icon {
  position: absolute;
  bottom: -1rem;
  left: 2rem;
  height: calc(12rem + 30px);
}

#proj-title {
  margin-top: 1.5rem;
}

#proj-header-bottom {
  margin: 1rem 2rem 0 2rem;
}

#proj-stats {
  padding: 0;
  margin: 0;
}

.proj-stat-num {
  margin-bottom: 0.5rem;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectDataService from "@/services/ProjectDataService";
import UserDataService from "@/services/UserDataService";
export default defineComponent({
  props: ["project_id", "members", "banner", "projectPic", "postQtd", "title", "desc"],

  data() {
    return {
      user_id: "",
      request: true
    }
  },
  methods: {
    sendInvite() {
      UserDataService.getLogin()
        .then(response => {
          this.user_id = response.data.user.id
          const invite = {
            user_id: this.user_id,
            project_id: this.project_id,
            is_accepted: "request_to_adm"
          }

          ProjectDataService.invite(invite)
            .then(response => {
                this.request = false
            })
            .catch((e: any) => {
            });
        })
        .catch(e => {
        })

    }
  },
  mounted() { 
    //pesquisar projeto e ver se user_id está no projeto
  },
});
</script>

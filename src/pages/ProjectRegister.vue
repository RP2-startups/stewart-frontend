<template>
  <div class="register-container container">
    <!--<div class="row d-flex align-items-center justify-content-center">
      <div class="col-md-10 col-lg-8 col-sm-12">
        <ProgressIndicator />
      </div>
    </div>-->

    <div class="row d-flex flex-column align-items-center mt-5">
      <div class="col-md-10 col-lg-8 col-sm-12">
        <h1 class="page-section-title">
          Formulário de cadastro do projeto:
        </h1>
      </div>
    </div>
    <div class="container text-center">
      
        <!--<div class="col-md-8 col-lg-8 col-sm-12 mt-5">
          <input type="text"  @keyup.enter="" placeholder="Procurar..." />
          <button class="btn" style="background-color: #E94560">Pesquisar</button>
        </div>-->

        <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12">
          <div class="d-flex justify-content-center mb-4">
            <img class="img-fluid" alt="Project Banner" :src="project_src" 
            style="max-width: 100rem; max-height: 20rem;"/>
          </div>
          <div class="d-flex justify-content-center">
            <div class="btn btn-primary btn-rounded">
              <label class="form-label text-white m-1" for="avatar">Escolher banner</label>
              <input type="file" accept="image/*" class="form-control d-none" @change="changeBanner" />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center mt-5 mb-5">
        <div class="col-md-4 col-lg-4 col-sm-4">
          <div class="d-flex justify-content-center mb-4">
            <img class="img-thumbnail img-fluid" alt="Project picture" :src="picture_src"
              style="width: 10rem; height: 10rem;" />
          </div>
          <div class="d-flex justify-content-center">
            <div class="btn btn-primary btn-rounded">
              <label class="form-label text-white m-1" for="avatar">Escolher imagem</label>
              <input type="file" accept="image/*" class="form-control d-none" id="avatar" @change="changePicture" />
            </div>
          </div>
        </div>
        
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-2">
              <label> Nome </label>
            </div>
            <div class="col-md-10 col-lg-6 col-sm-6">
              <input type="text" class="form-control col-md-10" placeholder="Projeto Alpha" v-model="project.name"
                required>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-2">
              <label> Descrição </label>
            </div>
            <div class="col-md-10 col-lg-6 col-sm-6">
              <textarea class="form-control col-md-10" placeholder="Um pouco sobre o projeto..." v-model="project.description"
                rows="5" style="resize:none;"></textarea>
            </div>
          </div>
        </div>
      </div>
      
      <button class="btn-register mt-2 mb-4" @click="registerProject">CADASTRAR</button>
    </div>
  </div>
</template>

<style>

.btn-register {
  background: #533483;
  padding-right: 2rem !important;
  padding-left: 2rem !important;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  font-size: 0.8rem;
  border-radius: 10px;
  border-color: #797979;
  font-family: "Jost", sans-serif;
  text-decoration: none;
  font-style: bold;
  color: var(--color-cream);
}

.btn-register:hover {
  background: #32007e !important;
  color: var(--color-text-light) !important;
}

.register-container {
  width: 65%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
<script lang="ts">
import ProjectDataService from "@/services/ProjectDataService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      nameValid: true,
      aboutValid: true,
      project: {
        name: "",
        description: "",
        project_picture: "",
        background_picture: "",
      },
      picture_src: "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg",
      project_src: "https://i.seadn.io/gae/0A54WU7el_5PyPxVWe5MQWkZqTXyRulMMyVLFbbaoEsIiTDg1dbJO-2HEM3t8GSP0qjYBZA78lsO1kCq18cI0Sy9BnZuQxe555Cf?auto=format&w=1920"
    };
  },
  methods: {
    changeBanner(e: any) {
      const file = e.target.files[0]
      if (file) {
        this.project.background_picture = file;
        this.project_src = URL.createObjectURL(file)
      }
    },
    changePicture(e: any) {
      const file = e.target.files[0]
      if (file) {
        this.project.project_picture = file;
        this.project_src = URL.createObjectURL(file)
      }
    },
    registerProject() {
      this.project.name == "" ? (this.nameValid = false) : (this.nameValid = true);
      this.project.description == "" ? (this.aboutValid = false) : (this.aboutValid = true);

      if (!this.nameValid || !this.aboutValid) return;

      const data = new FormData();
      data.append("name", this.project.name);
      data.append("description", this.project.description);
      data.append("picture", this.project.project_picture);
      data.append("background_picture", this.project.background_picture);

      ProjectDataService.create(data)
        .then(response => {
        })
        .catch((e: any) => {
        });
    }
  }
})
</script>
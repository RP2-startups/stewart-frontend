<script setup lang="ts">
import ImageCardCollapsableDisplay from "../components/ImageCardCollapsableDisplay.vue";
</script>

<template>
  <section class="container mb-4" v-if="!userLogged">
    <img src="https://freefrontend.com/assets/img/403-forbidden-html-templates/403-Forbidden-HTML.png" />
  </section>
  <div class="register-container container" v-if="userLogged">

    <div class="row d-flex flex-column align-items-center mt-5">
      <div class="col-md-10 col-lg-8 col-sm-12">
        <h1 class="page-section-title">
          Formulário de cadastro do projeto:
        </h1>
      </div>
    </div>
    <div class="container text-center">

      <div class="row">

        <div class="col-md-12 col-lg-12 col-sm-12">
          <div class="d-flex justify-content-center mb-4">
            <img class="img-fluid" alt="Project Banner" :src="project_src"
              style="max-width: 100rem; max-height: 20rem;" />
          </div>
          <div class="d-flex justify-content-center">
            <div class="btn btn-primary btn-rounded">
              <label class="form-label text-white m-1" for="banner">Escolher banner</label>
              <input type="file" accept="image/*" class="form-control d-none" id="banner" @change="changeBanner" />
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
              <div class="d-flex">
                <input type="text" class="form-control col-md-8 " placeholder="Projeto Alpha" v-model="project.name">
                <div class="dropdown col-md-2">
                  <button class="btn ms-2 dropdown-toggle" style="color: white; background-color: #533483" type="button"
                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ category.name.toUpperCase() }}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <a v-for="cat in categoryList" class="dropdown-item" @click="changeCategory(cat.id, cat.name)">
                      <li> {{ cat.name.toUpperCase() }} </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-2">
              <label> Descrição </label>
            </div>
            <div class="col-md-10 col-lg-6 col-sm-6">
              <textarea class="form-control col-md-10" placeholder="Um pouco sobre o projeto..."
                v-model="project.description" rows="5" style="resize:none;"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="row justify-content-center">
        <article class="mb-2 col-md-1 me-2">Participantes:</article>
        <ul class="list-group mb-5 col-md-5">
          <li v-for="item in participants" class="list-group-item list-group-item-primary">{{ item.name }}</li>
        </ul>
      </div>
        <div class="row justify-content-center">
          <label class="col-md-2">Digite o nome do usuário:</label>
          <div class="col-md-3 searchInput">
            <input type="text" class="form-control " placeholder="Pesquisar..." v-model="input" @keydown.enter="searchEnter">

          </div>
          <button class="btn-register col-md-1" @click="searchEnter()">Pesquisar</button>
        </div>
        <ImageCardCollapsableDisplay class="image-card-display" :cardWidth="240" :cardHeight="300" v-if="reRender"
          :cardsProp="userList" title="Usuários:" notFoundText="Nenhum usuário encontrado." collapseId="collapseUser" @cardClicked="handleClick"/>
      </div>
      <b-alert :show="(!nameValid || !aboutValid || !categoryValid)" dismissible variant="danger">Nome, descrição e categoria são obrigatórios!</b-alert>
      <b-alert :show="registerSuccess" dismissible variant="success">Projeto cadastrado com sucesso!</b-alert>
      <button class="btn-register mt-2 mb-4" @click="registerProject">CADASTRAR</button>
    </div>
  </div>
</template>

<style>
.searchInput input {
  background: white url("../assets/images/search.png") no-repeat 15px center;
  background-size: 15px 15px;
  padding: 7px 45px;
}

.btn-register {
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
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

.searchUser {
  display: inline-block;
  vertical-align: top;
  width: 340px;
  padding: 10px 45px;
  background: white url("../assets/images/search.png") no-repeat 10px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: solid;
  border-color: var(--color-light-blue);
  border-radius: 30px;
  position: relative;
}

.found-box {
  width: 340px;
  background-color: var(--color-cream);
  border-radius: 12px;
  margin-top: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  position: absolute;
  bottom: top;
}

.found {
  cursor: pointer;
  color: #000;
  padding-left: 20px;
}

.found:hover {
  background-color: var(--color-cream-hover);
}

.error {
  color: tomato;
  padding-left: 20px;
}
</style>
<script lang="ts">
import ProjectDataService from "@/services/ProjectDataService";
import UserDataService from "@/services/UserDataService";
import { defineComponent } from "vue";

type Category = {
  id: number,
  name: string;
};

type User = {
  id: number,
  name: string,
  desc: string,
  icon: string
};

type Participant = {
  user_id: number
};

export default defineComponent({
  data() {
    return {
      nameValid: true,
      aboutValid: true,
      categoryValid: true,
      registerSuccess: false,
      category: {
        id: -1,
        name: "Categoria"
      },
      userLogged: false,
      reRender: true,
      user_id: "",
      input: "",
      userList: [] as User[],
      categoryList: [] as Category[],
      participants: [] as User[],
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
      const file2 = e.target.files[0]
      if (file2) {
        this.project.project_picture = file2;
        this.picture_src = URL.createObjectURL(file2)
      }
    },
    registerProject() {
      this.project.name == "" ? (this.nameValid = false) : (this.nameValid = true);
      this.project.description == "" ? (this.aboutValid = false) : (this.aboutValid = true);
      this.category.id == -1 ? (this.categoryValid = false) : (this.categoryValid = true);

      if (!this.nameValid || !this.aboutValid || !this.categoryValid) return;

      let user_id = [] as Participant[]
      this.participants.forEach((element: User) => {
        user_id.push(element.id)
      });
      console.log(user_id)
      console.log(JSON.stringify(user_id))
      const project = JSON.stringify({ name: this.project.name, description: this.project.description })
      const data = new FormData();
      data.append("project", project);
      data.append("picture", this.project.project_picture);
      data.append("background_picture", this.project.background_picture)
      data.append("projectParticipations", JSON.stringify(user_id)); //"user_id": this.user_id
      data.append("categories", JSON.stringify([{"project_category_id": this.category.id }]))
      ProjectDataService.create(data)
        .then(response => {
          this.project.name = ""
          this.project.description = ""
          this.project.background_picture = ""
          this.project.project_picture = ""
          this.participants = [] as User[]
          this.userList = [] as User[]
          this.category = { id: -1, name: "Categoria"}
          this.picture_src = "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
          this.project_src = "https://i.seadn.io/gae/0A54WU7el_5PyPxVWe5MQWkZqTXyRulMMyVLFbbaoEsIiTDg1dbJO-2HEM3t8GSP0qjYBZA78lsO1kCq18cI0Sy9BnZuQxe555Cf?auto=format&w=1920"
          this.registerSuccess = true
        })
        .catch((e: any) => {
        });
    },
    searchEnter() {
      this.userList.splice(0, this.userList.length);
      UserDataService.search(this.input)
        .then(response => {

          for (let i = 0; i < response.data.length; i++) {
            let r = response.data[i];
            if (r.id != this.user_id) {
              let cardObj = { id: r.id, name: r.name, desc: r.about, icon: r.profile_picture };
              this.userList.push(cardObj);
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    changeCategory(id: number, category: string) {
      this.category.id = id,
      this.category.name = category

    },
    handleClick(card: any) {
      if (!this.participants.includes(card)) this.participants.push(card)
      },
  },
  mounted() {
    ProjectDataService.getCategories()
      .then(response => {
        response.data.forEach((category: any) => {
          let catObj = { id: category.id, name: category.name };
          this.categoryList.push(catObj)
        });
      })
      .catch(e => {
      })
    UserDataService.getLogin()
      .then(response => {
        this.user_id = response.data.user.id
        this.userLogged = true
      })
      .catch(e => {
        this.userLogged = false
      })
  },
  watch: {
    'this.input': {
      async handler(input) {
        this.reRender = false;
        this.searchEnter();
        await this.$nextTick();
        this.reRender = true;
      },
      deep: true,

    }
  }
})
</script>
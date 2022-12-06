<script setup>
</script>
<!-- name email photo pass about -->
<template>
  <div class="form">
    <h2 class="text-center mb-4 title-register">REGISTRE-SE</h2>

    <b-form>
      <div class="row">
        <div class="col-md-8 col-sm-8 form-wrapper mobile-space">
          <div class="container">
            <!-- NOME -->
            <b-form-group label-for="name">
              <label class="d-flex">
                Nome
              </label>
              <input type="text" class="form-control" :class="{ 'is-invalid': !nameValid }" 
              placeholder="Tyler" v-model="user.name" required>
              <p class="errorMessage" v-if="!nameValid">Nome é obrigatório!</p>
            </b-form-group>
            

            <!-- SOBRE -->
            <b-form-group label-for="about">
              <label class="d-flex">
                Sobre (opcional)
              </label>
              <textarea class="form-control" rows="3" v-model="user.about" placeholder="Um pouco sobre mim..."></textarea>
            </b-form-group>
          
          <!-- EMAIL -->
          <b-form-group label-for="email">
            <label class="d-flex justify-content-between"> E-mail </label>
            <input type="text" class="form-control " :class="{ 'is-invalid': !emailValid }"
              placeholder="tyler@email.com" v-model="user.email" required>
              <p class="errorMessage" v-if="!emailValid">Insira um e-mail válido</p>
          </b-form-group>

          <!-- SENHA -->
          <b-form-group label-for="password">
            <label class="d-flex justify-content-between">
              Senha
            </label>
            <input type="password" class="form-control" :class="{ 'is-invalid': !passwordValid }" v-model="user.password"
              required>
          <p class="errorMessage" v-if="!passwordValid">Senha precisa ter mais de 8 caracteres</p>
          </b-form-group>

        </div>
      </div>
        <div class="col-md-4 col-sm-4 form-wrapper">
          <div class="d-flex justify-content-center mb-4">
            <img  class="img-fruid img-thumbnail profile"
              alt="Profile avatar" :src="profile_src" style="width: 10rem; height: 10rem;" />
          </div>
          <div class="d-flex justify-content-center">
            <div class="btn btn-primary btn-rounded">
              <label class="form-label text-white m-1" for="avatar">Escolher imagem</label>
              <input type="file" accept="image/*" class="form-control d-none" id="avatar" @change="onFile"/>
            </div>
          </div>
        </div>
      </div>
      <b-alert
      :show="registerSuccess"
      dismissible
      variant="success"
    >Cadastrado com sucesso!</b-alert>
      <div class="btn btn-wrapper-register p-0 d-flex justify-content-center">
        <button class="btn btn-register mt-2" @click="saveUser">CADASTRAR</button>
      </div>
    </b-form>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}

.form {
  background-color: var(--color-cream);
  width: 90%;
  position: relative;
  margin: 10% auto;
  padding: 5px 10px 13px 10px;
  border-radius: 10px;
}

.form-wrapper {
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-textonwhite);
}

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

.btn-wrapper-register :hover {
  background: #32007e !important;
  color: var(--color-text-light) !important;
}

.back-arrow {
  border: 0px;
  width: 40px;
  height: 40px;
  margin-left: 30px;
}

.title-register {
  color: var(--color-textonwhite);
}

.errorMessage {
  color: var(--color-pink);
  font-size: 1rem;
  margin-top: 0.2rem;
  text-align: left;
}

@media screen and (max-width: 767px) {
  .title-register {
    margin-top: 0px;
  }
  .mobile-space {
    padding-left: 40px;
    padding-right: 40px;
  }
  .back-arrow {
    margin: 0;
  }
  .row {
    display: flex;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "../services/UserDataService";

export default defineComponent({
  data() {
    return {
      nameValid: true,
      emailValid: true,
      passwordValid: true,
      user: {
        name: "",
        email: "",
        password: "",
        profile_picture: "",
        about: "",
      },
      profile_src: "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg",
      screenHeigth: innerHeight,
      registerSuccess: false
    };
  },
  mounted: function () {
    window.addEventListener('resize', this.adjustHeight);
  },
  methods: {
    saveUser() {
      this.user.name == "" ? this.nameValid = false : this.nameValid = true,
      this.user.email == "" || !this.user.email.includes("@") ? this.emailValid = false : this.emailValid = true,
      this.user.password == "" || this.user.password.length < 8 ? this.passwordValid = false : this.passwordValid = true
      if(!this.nameValid || !this.emailValid || !this.passwordValid) return;

      const data = new FormData();
      data.append("name", this.user.name);
      data.append("email", this.user.email);
      data.append("password", this.user.password);
      data.append("profileImage", this.user.profile_picture);
      data.append("about", this.user.about);
      
      UserDataService.create(data)
        .then(response => {
            this.user.name = ""
            this.user.email = ""
            this.user.password = ""
            this.user.profile_picture = ""
            this.user.about = ""
            this.registerSuccess = true
        })
        .catch((e: any) => {
          console.log(e);
        });
        
    },
    adjustHeight() {
      this.screenHeigth = window.innerHeight
    },
    onFile(e: any) {
      const file = e.target.files[0]
      if (file) {
        this.user.profile_picture = file;
        this.profile_src = URL.createObjectURL(file)
      }
    }
  }
});
</script>

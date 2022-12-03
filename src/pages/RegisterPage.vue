<script setup>
</script>
<!-- name email photo pass about -->
<template>
  <div class="form">
    <header class="row">
      <button @click="$emit('close')" class="col-md-1 btn">
        <img src="../assets/images/arrow-back-black.png" class="back-arrow" />
      </button>
      <h2 class="text-center mb-5 title-login col-md-11 col-sm-8">REGISTRE-SE</h2>
    </header>

    <b-form>
      <div class="row">
        <div class="col-md-5 col-sm-4 form-wrapper mobile-space">
          <div class="container">
            <!-- NOME -->
            <b-form-group label-for="name">
              <label class="d-flex">
                Nome
              </label>
              <input type="text" class="form-control" :class="{ 'is-invalid': !nameValid }" 
              placeholder="Tyler" v-model="user.name" required>
            </b-form-group>
            <p class="errorMessage" :class="{ disable: nameValid, }">
              Insira um nome válido
            </p>

            <!-- SOBRE -->
            <b-form-group label-for="about">
              <label class="d-flex">
                Sobre (opcional)
              </label>
              <textarea class="form-control" rows="5" v-model="user.about" placeholder="Um pouco sobre mim..."></textarea>
            </b-form-group>
          </div>
        </div>

        <div class="col-md-4 col-sm-4 form-wrapper mobile-space">
          <!-- EMAIL -->
          <b-form-group label-for="email">
            <label class="d-flex justify-content-between"> E-mail </label>
            <input type="text" class="form-control " :class="{ 'is-invalid': !emailValid }"
              placeholder="tyler@email.com" v-model="user.email" required>
          </b-form-group>

          <p class="errorMessage" :class="{ disable: emailValid, }">
            Insira um e-mail válido
          </p>

          <!-- SENHA -->
          <b-form-group label-for="password">
            <label class="d-flex justify-content-between">
              Senha
            </label>
            <input type="password" class="form-control" :class="{ 'is-invalid': !passwordValid }" v-model="user.password"
              required>
          </b-form-group>
          <p class="errorMessage" :class="{ disable: passwordValid }">Senha precisa ter mais de 8 caracteres</p>
        </div>

        <div class="col-md-3 col-sm-3 form-wrapper">
          <div class="d-flex justify-content-center mb-4">
            <img  class="rounded-circle"
              alt="Profile avatar" :src="user.profile_picture" style="width: 10rem; height: 10rem;" />
          </div>
          <div class="d-flex justify-content-center">
            <div class="btn btn-primary btn-rounded">
              <label class="form-label text-white m-1" for="avatar">Escolher imagem</label>
              <input type="file" accept="image/*" class="form-control d-none" id="avatar" @change="onFile"/>
            </div>
          </div>
        </div>
      </div>
      <div class="noHover btn btn-wrapper-login p-0">
        <button class="btn btn-login" @click="saveUser">CADASTRAR</button>
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
  width: 80%;
  position: relative;
  margin: 10% auto;
  padding: 5px 20px 13px 20px;
  border-radius: 10px;
}

.form-wrapper {
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-textonwhite);
}

.btn-login {
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

.btn-wrapper-login :hover {
  background: #32007e !important;
  color: var(--color-text-light) !important;
}

.back-arrow {
  border: 0px;
  width: 40px;
  height: 40px;
  margin-left: 30px;
}

.title-login {
  margin-top: 40px;
  color: var(--color-textonwhite);
}

.errorMessage {
  color: var(--color-pink);
  font-size: 1rem;
  margin-top: 0.5rem !important;
  margin-bottom: 1.5rem;
}

.disable {
  display: none;
}

@media screen and (max-width: 767px) {
  .title-login {
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
        id: null,
        name: "",
        email: "",
        profile_picture: "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg",
        about: "",
        password: ""
      },
      screenHeigth: innerHeight
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

      var data = {
        name: this.user.name,
        email: this.user.email,
        profile_picture: this.user.profile_picture,
        about: this.user.about,
        password: this.user.password
      };

      UserDataService.create(data)
        .then((response: { data: { id: null; }; }) => {
          this.user.id = response.data.id;
          console.log(response.data);
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
        this.user.profile_picture = URL.createObjectURL(file)
      }
    }
  }
});
</script>

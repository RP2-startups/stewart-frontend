<script setup lang="ts">
import RegisterModal from "../pages/RegisterPage.vue";
</script>

<template>
  <div class="row overflow-hidden" :style="{ 'height': `${screenHeigth}px` }">
    <div class="col-md-5 col-sd-12 nopadding form">
      <button @click="handleClose" class="btn">
        <img src="../assets/images/arrow-back-black.png" class="back-arrow" />
      </button>
      <div v-if="openReg">
              <RegisterModal ref="registerModal" />
      </div>
      <div class="col-md-6 offset-md-3 col-sm-4 offset-sm-4 form-wrapper mobile-space" v-if="openLog">
        <h2 class="text-center mb-5 title-login">FAÇA O LOGIN</h2>
        <b-form>
          <!-- EMAIL -->
          <b-form-group label-for="email">
            <label class="d-flex justify-content-between"> E-mail </label>
            <input type="text" class="form-control" :class="{ 'is-invalid': !emailValid }"
              placeholder="jorginho@gameplays.com" v-model="user.email" required />
          </b-form-group>

          <p class="errorMessage" :class="{
            disable: emailValid,
          }">
            Insira um e-mail válido
          </p>
          <!-- SENHA -->
          <b-form-group label-for="password">
            <label class="d-flex justify-content-between">
              Senha
            </label>
            <input type="password" class="form-control" :class="{ 'is-invalid': !passwordValid }" v-model="user.password"
              required />
          </b-form-group>
          <p class="errorMessage" :class="{ disable: passwordValid }">
            Senha precisa ter mais de 8 caracteres
          </p>
          <p class="errorMessage" :class="{ disable: loginValid }">
            E-mail e/ou senha incorretos!
          </p>
          <div class="btn btn-wrapper-login p-0">
            <button class="btn btn-login" @click="login">ENTRAR</button>
          </div>
          <hr />
            <button class="btn btn-register" @click="openReg = true; openLog = false">REGISTRAR-SE</button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.login_image {
  width: 100%;
  height: 100%;
}

.nopadding {
  padding: 0 !important;
}

/* form css */
.form {
  background-color: var(--color-cream);
}

@media screen and (max-width: 767px) {
  .mobile-space {
    padding-left: 40px;
    padding-right: 40px;
  }
}

.form-wrapper {
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  height: 100%;
  text-align: center;
  color: var(--color-textonwhite);
  padding-bottom: 2rem;
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

.btn-register {
  background: rgba(255, 255, 255, 0.15);
  padding-right: 2rem !important;
  padding-left: 2rem !important;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  font-size: 0.8rem;
  border-radius: 10px;
  border-color: #1c1d1f;
  font-family: "Jost", sans-serif;
  text-decoration: none;
  font-style: bold;
  color: var(--color-textonwhite);
}

.btn-wrapper-register :hover {
  background: rgba(80, 80, 80, 0.15) !important;
  color: var(--color-cream);
}

.back-arrow {
  margin-top: 15px;
  margin-left: 10px;
  width: 50px;
  height: 50px;
}

.back-arrow :hover {
  cursor: pointer;
}

.title-login {
  margin-top: 50px;
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
</style>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "@/services/UserDataService";

export default defineComponent({
  data() {
    return {
      emailValid: true,
      passwordValid: true,
      loginValid: true,
      user: {
        email: "",
        password: ""
      },
      screenHeigth: innerHeight,
      openLog: true,
      openReg: false
    };
  },
  mounted: function () {
    window.addEventListener('resize', this.adjustHeight)
    this.$emit('changeVisibility', false)
  },
  methods: {
    login() {
      this.user.email == "" ? (this.emailValid = false) : (this.emailValid = true);
      this.user.password == "" || this.user.password.length < 8
        ? (this.passwordValid = false)
        : (this.passwordValid = true);

      if (!this.passwordValid || !this.emailValid) return;

      const login = {
        email: this.user.email,
        password: this.user.password
      }

      UserDataService.login(login)
        .then(response => {
          location.reload()
          this.$emit("close");
          this.$emit("getUserdata")
        })
        .catch((e: any) => {
          this.loginValid = false;
        });
        
    },
    adjustHeight() {
      this.screenHeigth = window.innerHeight
    },
    handleClose() {
      if(this.openReg) {
        this.openReg = !this.openReg;
        this.openLog = !this.openLog;
      }
      else
        this.$emit("close");
    }
  },
});
</script>


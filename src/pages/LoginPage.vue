<script setup lang="ts">
import RegisterModal from "../pages/RegisterPage.vue";
</script>

<template>
  <div class="row asa" :style="{ 'height': `${screenHeigth}px` }">
    <div class="col-md-5 col-sd-12 nopadding form">
      <button @click="$emit('close')">
        <img src="../assets/images/arrow-back-black.png" class="btn back-arrow d-none d-md-block" />
      </button>
      <div class="col-md-6 offset-md-3 col-sm-4 offset-sm-4 form-wrapper mobile-space">
        <h2 class="text-center mb-5 title-login">FAÇA O LOGIN</h2>
        <b-form>
          <!-- EMAIL -->
          <b-form-group label-for="email">
            <label class="d-flex justify-content-between"> Email </label>
            <input type="text" class="form-control" :class="{ 'is-invalid': !emailValid }"
              placeholder="jorginho@gameplays.com" v-model="email" required />
          </b-form-group>

          <p class="errorMessage" :class="{
            disable: emailValid,
          }">
            Insira um email válido
          </p>
          <!-- SENHA -->
          <b-form-group label-for="password">
            <label class="d-flex justify-content-between">
              Senha
              <small><a href="#">Esqueceu sua senha?</a></small>
            </label>
            <input type="password" class="form-control" :class="{ 'is-invalid': !passwordValid }" v-model="password"
              required />
          </b-form-group>
          <p class="errorMessage" :class="{ disable: passwordValid }">
            Senha precisa ter mais de 8 caracteres
          </p>
          <div class="noHover btn btn-wrapper-login p-0">
            <button class="btn btn-login" @click="login">ENTRAR</button>
          </div>
          <hr />
          
            <button class="btn btn-register" @click="open = true">REGISTRAR-SE</button>
          <Transition name="modal">
            <div v-if="open" class="modal">
              <RegisterModal @close="open = false" />
            </div>
          </Transition>
        </b-form>
      </div>
    </div>
    <div class="col-7 nopadding d-none d-md-block">
      <img class="login_image"
        src="https://as1.ftcdn.net/v2/jpg/01/99/42/28/1000_F_199422875_2RLcAaIQ6S2G0yis7okytByh1SaB2ZNv.jpg" />
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
.asa {
  overflow: hidden;
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
  margin-top: 20px;
  margin-left: 10px;
  width: 90px;
  height: 90px;
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
export default defineComponent({
  data() {
    return {
      emailValid: true,
      passwordValid: true,
      password: "",
      email: "",
      screenHeigth: innerHeight,
      prevPage: "",
      open: false,
    };
  },
  mounted: function () {
    window.addEventListener('resize', this.adjustHeight)
    this.$emit('changeVisibility', false)
  },
  methods: {
    login() {
      this.email == "" ? (this.emailValid = false) : (this.emailValid = true);
      this.password == "" || this.password.length < 8
        ? (this.passwordValid = false)
        : (this.passwordValid = true);
    },
    adjustHeight() {
      this.screenHeigth = window.innerHeight
    },
  },
});
</script>


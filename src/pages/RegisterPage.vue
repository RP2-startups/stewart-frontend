<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="row">
    <div class="col-md-5 col-sd-12 nopadding form">
      <img
        src="../assets/images/arrow-back-black.png"
        class="btn back-arrow d-none d-md-block"
        @click="$router.back()"
      />
      <div class="col-md-6 offset-md-3 col-sm-3 offset-sm-3 form-wrapper mobile-space">
        <h2 class="text-center mb-5 title-login">REGISTRE-SE</h2>
        <b-form>
          <!-- EMAIL -->
          <b-form-group label-for="email">
            <label class="d-flex justify-content-between"> Email </label>
            <input type="text" class="form-control " :class="{'is-invalid':!emailValid}" placeholder="jorginho@gameplays.com" v-model="email" required>
          </b-form-group>

          <p
            class="errorMessage"
            :class="{
              disable: emailValid,
            }"
          >
            Insira um email válido
          </p>
          <!-- SENHA -->
          <b-form-group label-for="password">
            <label class="d-flex justify-content-between">
              Senha
            </label>
            <input type="password" class="form-control" :class="{'is-invalid':!passwordValid}" v-model="password" required>
          </b-form-group>
          <p class="errorMessage" :class="{disable:passwordValid}">Senha precisa ter mais de 8 caracteres</p>
          <div class="noHover btn btn-wrapper-login p-0">
            <button class="btn btn-login" @click="login">CADASTRAR</button>
          </div>
          <hr />
          <router-link
            to="/login"
            class="noHover btn btn-wrapper-register p-0"
          >
            <button class="btn btn-register">VOLTAR AO LOGIN</button>
          </router-link>
        </b-form>
      </div>
    </div>
    <div class="col-7 nopadding d-none d-md-block">
      <img
        class="login_image"
        src="https://m.media-amazon.com/images/I/61nRIORTp4L._AC_SX425_.jpg"
      />
    </div>
  </div>
</template>

<style scoped>
/* page css */
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
      passwordValid:true,
      password: "" ,
      email: ""
    };
  },
  methods:{
    login(){
      this.email == "" ?  this.emailValid = false : this.emailValid = true
      this.password == "" || this.password.length < 8  ? this.passwordValid = false : this.passwordValid = true
    }
  }
});
</script>

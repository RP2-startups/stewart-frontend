<template>

    <section class="container" v-if="dataLoaded" @getUserdata="getUserData()">
        <div class="row mt-5 mb-5">
            <div class="col-md-2 col-lg-2 text-center">
                <img :src="profilePicture" class="img-thumbnail img-fruid" alt="icon">
                <div class="btn btn-primary btn-rounded mt-2">
                    <label class="form-label text-white m-1" for="avatar">Escolher imagem</label>
                    <input type="file" accept="image/*" class="form-control d-none" id="avatar" @change="" />
                </div>
            </div>
            <div class="col-md-8 col-lg-8">
                <label class="mb-1">
                    Nome
                </label>
                <input type="text" class="form-control" :class="{ 'is-invalid': !nameValid }" v-model="user.name">
                <p class="errorMessage" v-if="!nameValid">
                    Campo Nome é obrigatório!
                </p>

                <label class="mb-1">
                    E-mail
                </label>
                <input type="text" class="form-control " :class="{ 'is-invalid': !emailValid }" v-model="user.email">

                <p class="errorMessage" v-if="!emailValid">
                    Insira um e-mail válido
                </p>

                <label class="mb-1">
                    Sobre
                </label>
                <textarea class="form-control" rows="3" v-model="user.about" style="resize: none;"></textarea>
            </div>
        </div>
        <b-alert :show="updateSuccess" dismissible variant="success">Salvo com sucesso!</b-alert>
        <div class="noHover btn-wrapper-save p-0 d-flex justify-content-center">
            <button class="btn btn-save mt-2 mb-4" @click="">SALVAR</button>
        </div>
    </section>

</template>

<style scoped>
.btn-save {
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

.btn-wrapper-save :hover {
    background: #32007e !important;
    color: var(--color-text-light) !important;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "@/services/UserDataService";

export default defineComponent({
    data() {
        return {
            nameValid: true,
            emailValid: true,
            updateSuccess: false,
            dataLoaded: false,
            user: {
                name: "",
                email: "",
                about: ""
            },
            profilePicture: "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg",
        }
    },
    mounted() {
        UserDataService.getLogin()
            .then(response => {
                this.user.name = response.data.user.name
                this.user.email = response.data.user.email
                this.user.about = response.data.user.about
                this.dataLoaded = true
            })
            .catch(e => {
                this.dataLoaded = false
            })
    },
    methods: {
        getUserData() {
            UserDataService.getLogin()
                .then(response => {
                    this.user.name = response.data.user.name
                    this.user.email = response.data.user.email
                    this.user.about = response.data.user.about
                    this.dataLoaded = true
                })
                .catch(e => {
                    this.dataLoaded = false
                })
        }
    }
})
</script>
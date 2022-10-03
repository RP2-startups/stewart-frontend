<template>
    <footer class="footer-main pt-3" v-if="visibility">
        <div class="container">
            <div class="row">
                <div class="col-md-4 brand">
                    <h1>Stewart</h1>
                </div>
                <div class="col-md-3 item">
                    <strong>Plataforma</strong>
                    <ul>
                        <li>Visão Geral</li>
                        <li>Recursos</li>
                        <li>Sobre nós</li>
                    </ul>
                </div>
                <div class="col-md-3 item">
                    <strong>Ajuda</strong>
                    <ul>
                        <li>Como funciona?</li>
                        <li>Pagamento</li>
                        <li>Assistência</li>
                    </ul>
                </div>
                <div class="col-md-2 item">
                    <strong>Contatos</strong>
                    <ul>
                        <li>(11) 999-999-999</li>
                        <li>gabriel_braga_lagrotaria_de_oliveira@usp.br</li>
                    </ul>
                </div>
            </div>
            <div class="linha"></div>
            <row>
                <div class="col-md-4 offset-md-10 item-social align-self-end">
                    <ul>
                        <li class="d-inline-block "><img src="../assets/facebooklogo.webp"></li>
                        <li class="d-inline-block ms-3"><img src="../assets/instagram_icon.webp"></li>
                        <li class="d-inline-block ms-3"><img src="../assets/twitter_icon.png"></li>
                        <li class="d-inline-block ms-3"><img src="../assets/linkedin_icon.png"></li>
                    </ul>
                </div>
            </row>
        </div>
    </footer>
</template>

<style>

    .brand{
        align-items: initial;
    }

    .footer-main{
        background-color: var(--color-cream);
        position: fixed;
        bottom: 0;
        width: 100%;
        color: #16213E;
    }

    .item{
        text-align: center;
        padding-bottom: 20px;
        word-wrap: break-word;
    }

    ul{
        list-style: none;
    }

    .item strong{
        font-size: 20px;
        margin-left: 30px;
    }

    .linha{
        background-color: #16213E;
        height: 0.1rem;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 100%;
    }

    .item-social{
        padding-top:10px;
        display: inline-block;
    }

    .item-social img{
        width: 30px;
        height: 30px;
    }

</style>

<script lang="ts">
    import Vue, { defineComponent } from "vue";
    export default defineComponent({
        props: {
            visibility:{
                type : Boolean,
                default : true
            }
        },
        data() {
            return {

            }
        },
        methods:{

        },
        computed: {

        }
    })
</script>
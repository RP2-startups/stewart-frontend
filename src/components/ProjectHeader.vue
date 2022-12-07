<template>
    <div id="proj-header-top">
        <!--banner-->
        <img src="https://i.seadn.io/gae/0A54WU7el_5PyPxVWe5MQWkZqTXyRulMMyVLFbbaoEsIiTDg1dbJO-2HEM3t8GSP0qjYBZA78lsO1kCq18cI0Sy9BnZuQxe555Cf?auto=format&w=1920" 
        class="img-fluid" id="proj-banner" alt="banner" />

        <!--icone do projeto-->
        <img src="https://avatars.githubusercontent.com/u/88856792?v=4" 
        class="img-thumbnail rounded" id="proj-icon" alt="icon">
    </div>
    <!--nome do projeto-->
    <div id="proj-header-bottom">
        <div id="proj-top-row" class="row">

            <!--nome do projeto-->
            <div class="col">
                <p id="proj-title" class="fs-1 text-break">{{ projectProps[0] }}</p>
            </div>
            
            <!--estatisticas do projeto-->
            <div class="col d-flex justify-content-end">
                <ul id="proj-stats" class="d-inline-flex">
                    <li
                    class="proj-stat text-center ms-4"
                    v-for="item in attr"
                    :key="item.id"
                    :ref="'menu-item_' + item.id"
                    >
                        <p class="proj-stat-num fs-2">
                            {{ item.value }}
                        </p>
                        <p class="proj-stat-desc fs-5">
                            {{ item.name }}
                        </p>
                    </li>
                </ul>   
            </div>

        </div>
        <div id="proj-bot-row" class="row">

            <!--descricao do projeto-->
            <div class="col">
                <p class="fs-5">{{ projectProps[1] }}</p>
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
    export default defineComponent({
        props: {
            projectAttr: {
                default: [
                    { 
                        name: "Membros",
                        value: "8",
                    },
                    { 
                        name: "Publicações",
                        value: "20",
                    },
                    { 
                        name: "Avaliação",
                        value: "4.2",
                    },
                    { 
                        name: "Seguidores",
                        value: "230",
                    },
                ],
            },
            projectProps: {
                default: [
                    'Titulo aew',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ],
            },
        },
        created: function () {
            this.loadAttr();
        },
        data() {
            return {
                attr: [{id: 0, name: "" , value: ""}]
            };
        },
        methods: {
            loadAttr() {
                this.attr.pop();
                var count: number = this.attr.length;
                for (const element of this.projectAttr) {
                    var item = { id: ++count, name: element.name , value: element.value};
                    this.attr.push(item);
                }
            },
        },
    });
</script>

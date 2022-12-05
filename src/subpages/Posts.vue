<script setup lang="ts">
    import PostCard from "@/components/PostCard.vue";
</script>

<template>
    <p class="fs-1">Postagens</p>
    <ul class="proj-members d-inline-flex">
        <li
        class="me-4"
        v-for="item in items"
        :key="item.id"
        :ref="'person-card-item_' + item.id"
        >
            <PostCard :poster="item.poster" :func="item.func" :path="item.path" :description="item.description"/>
        </li>
    </ul>
</template>

<style scoped>
    .proj-members {
        padding: 0;
    }
</style>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        props: {
            list: {
                default: [
                    { 
                        poster: "felmateos 1",
                        func: "CEO",
                        title: "titulo aqui 1",
                        path: "https://avatars.githubusercontent.com/u/88856792?v=4",
                        description: "uma descricao aew"
                    },
                    { 
                        poster: "felmateos 2",
                        func: "Dev",
                        title: "titulo aqui 2",
                        path: "https://avatars.githubusercontent.com/u/88856792?v=4",
                        description: "uma descricao aew"
                    },
                    { 
                        poster: "felmateos 3",
                        func: "Designer",
                        title: "titulo aqui 3",
                        path: "https://avatars.githubusercontent.com/u/88856792?v=4",
                        description: "uma descricao aew"
                    },
                ],
            },
        },
        created: function () {
            this.loadCards();
        },
        data() {
            return {
                items: [{id: 0, poster: "" , func: "", title: "", path: "", description: ""}],
            };
        },
        methods: {
            loadCards() {
                this.items.pop();
                var count: number = this.items.length;
                for (const element of this.list) {
                    var item = { id: ++count, poster: element.poster , func: element.func, title: element.title, path: element.path, description: element.description};
                    this.items.push(item);
                }
            },
        },
    });
</script>
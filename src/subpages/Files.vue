<script setup lang="ts">
    import VuePDF from '@/components/VuePDF.vue';
</script>

<template>
    <VuePDF />
</template>

<style scoped>

</style>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        props: {
            list: {
                default: [
                    { 
                        name: "felmateos",
                        func: "projeto",
                    },
                    { 
                        name: "rfv",
                        func: "navbar",
                    },
                    { 
                        name: "gabe",
                        func: "back",
                    },
                ],
            },
        },
        created: function () {
            this.loadCards();
        },
        data() {
            return {
                items: [{id: 0, name: "" , func: ""}],
            };
        },
        methods: {
            loadCards() {
                this.items.pop();
                var count: number = this.items.length;
                for (const element of this.list) {
                    var item = { id: ++count, name: element.name , func: element.func};
                    this.items.push(item);
                }
            },
        },
    });
</script>
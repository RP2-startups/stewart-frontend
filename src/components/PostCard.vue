<template>
    <div class="post-card card mb-3">
        <div class="card-header">
            <div class="row">
                <div class="col-2">
                    <img src="https://avatars.githubusercontent.com/u/88856792?v=4" alt="Avatar" class="post-icon rounded-5" />
                </div>
                <div class="col">
                    <div class="row">
                        <h5 class="card-title">{{ poster }}</h5>
                    </div>
                    <div class="row">
                        <h5 class="card-subtitle">{{ func }}, publicou:</h5>
                    </div>
                </div>
            </div>
        </div>
        <img :src="path" class="card-img-bottom" alt="...">
        <div class="card-body">
            <p class="card-text">{{ description }}</p>
            <p class="card-text"><small class="text-muted">Postado 3 minutos atrás</small></p>
        </div>
    </div>
</template>

<style scoped>
    .post-card {
        color: rgb(36, 36, 36);
    }

    .post-icon {
        width: calc(2rem + 20px);
        float: left;
    }
</style>

<script lang="ts">
    export default {
        props: [
            'poster',
            'func',
            'title',
            'path',
            'description'
        ]
    }
</script>
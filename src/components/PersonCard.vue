<template>
    <div class="person-card-container">
        <img src="https://avatars.githubusercontent.com/u/88856792?v=4" alt="Avatar" class="person-card-image">
        <div class="person-card-overlay">
            <div class="person-card-name">{{ name }}</div>
            <div class="person-card-function">{{ func }}</div>
        </div>
    </div>
</template>

<style scoped>
.person-card-container {
    position: relative;
    width: 20vw;
}
.person-card-image {
    display: block;
    width: 20vw;
    height: auto;
}
.person-card-overlay {
    position: absolute;
    top: 70%;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #008CBA;
}
.person-card-container:hover .person-card-overlay {
    opacity: 1;
}
.person-card-name {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 30%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
}

.person-card-function {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 60%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>

<script lang="ts">
    export default {
        props: [
            'name',
            'func'
        ]
    }
</script>
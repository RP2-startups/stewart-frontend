<template>
    <div>
        
    </div>
</template>

<script lang="ts">
import ProjectHeader from "../components/ProjectHeader.vue";
import { defineComponent } from "vue";
export default defineComponent({
    beforeUpdate() {
        console.log(this.$route.params.input);
    },
    components: { ProjectHeader }
});
</script>

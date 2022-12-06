<template>
  <input type="text" v-model="input" @keyup.enter="searchEnter()" placeholder="Procurar..." />

</template>

<style scoped>
@import "../assets/styles/base.css";
body {
  position: relative;
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: inline-block;
  vertical-align: top;
  width: 540px;
  padding: 10px 45px;
  background: white url("../assets/images/search.png") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: solid;
  border-color: var(--color-light-blue);
  border-radius: 30px;
  position: relative;
}

.found-box{
  width: 540px;
  background-color: var(--color-cream);
  border-radius: 12px;
  margin-top: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  position: absolute;
  bottom: top;
}
.found {
  cursor: pointer;
  color: #000;
  padding-left: 20px;
}
.found:hover {
  background-color: var(--color-cream-hover);
}

.error {
  color: tomato;
  padding-left: 20px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectDataService from "@/services/ProjectDataService";
export default defineComponent({
  data() {
    return {
      isFound: false,
      input: "",
      listAll: [] as Object[],
    };
  },
 
  methods: {
    searchEnter(){
      this.$router.push({
        name: "ProjectList",
        params: {input: this.input}
      })
    }
  },
});
</script>

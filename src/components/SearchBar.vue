<template>
  <input type="text" v-model="input" placeholder="Procurar..." />
  <div class="item found" v-for="items in listFound" >
    <p></p>
  </div>
  <div class="item error" v-if="isFound&& listFound.length == 0">
    <p>No results found!</p>
  </div>
</template>

<style scoped>
@import "../assets/styles/base.css";
  body {
    padding: 20px;
    min-height: 100vh;
    background-color: rgb(234, 242, 255);
  }

  input {
  display: block;
  width: 540px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("../assets/images/search.png") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: solid;
  border-color: var(--color-light-blue);
  border-radius: 30px;
 
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.found {
  background-color: var(--color-cream);
  cursor: pointer;
}

.error {
  background-color: tomato;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      isFound : false,
      input: "",
      listFound: new Array<String>()
    };
  },
  mounted : function() {
   
  }
});
</script>

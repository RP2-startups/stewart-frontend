<template>
  <div class="container mt-4 mb-4">
    <ul class="list-group ">
      <li v-for="item in itens" class="list-item ">
        <img src="@/assets/icons/user-circle-outline.svg" class="item-pic" />
        <div class="item-title">
          <div class="d-flex w-100">
            <h5>{{ item.name }}</h5>
          </div>
          <p class="mb-1 item-desc">
            {{ item.message }}
          </p>
        </div>
        <div class="item-buttons">
          <img
            src="@/assets/icons/correct.svg"
            @click="inviteResponse(true)"
          />
          <img
            src="@/assets/icons/alpha-x-circle-outline.svg"
            @click="inviteResponse(false)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import "../assets/styles/base.css";


.list-item {
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  margin-top: -1px;
  width:90%;
  border: 1px solid white;
  background-color: #000f2260;
}

.item-pic {
  width: 4rem;
  height: 4rem;
}

.item-title {
  margin-left: 1rem;
  margin-top: 0.25rem;
}

.item-desc {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  width: 720px;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: var(--color-purple);
}

.item-buttons{
    display: inline-flex;
    justify-content: flex-end;
    height: 100%;
    margin-left: 10rem;
    margin-top: 1.5rem;

}

.item-buttons img{
    width: 3rem;
    height: 3rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
}

.item-buttons :hover{
    background-color: #fff;
    border-radius: 50%;
}

</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      itens: [
        {
          id: 1,
          name: "blabla",
          pic: "`../assets/icons/user-circle-outline.svg",
          message: "blabala",
        },
        {
          id: 2,
          name: "bla",
          pic: "`../assets/icons/user-circle-outline.svg",
          message:
            "blaasdsadsaddadsadasasdasddfjsdfsdfhyusdfsblaasdsadsaddadsadasasdasddfjsdfsdfhyusdfsdfusdfvgfvgfbvcvgfnjunhjucxcvhudfhusdvdvhuvfhuvfdfssdsdfhuhusdvhusdcdhusddshudfhudshudduhbladfusdfvgfvgfbvcvgfnjunhjucxcvhudfhusdvdvhuvfhuvfdfssdsdfhuhusdvhusdcdhusddshudfhudshudduhbla",
        },
        {
          id: 3,
          name: "blala",
          pic: "`../assets/icons/user-circle-outline.svg",
          message: "blabla",
        },
        {
          id: 4,
          name: "ba",
          pic: "`../assets/icons/user-circle-outline.svg",
          message: "blabla",
        },
        {
          id: 5,
          name: "blla",
          pic: "`../assets/icons/user-circle-outline.svg",
          message: "bbla",
        },
      ],
    };
  },
  methods : {
    inviteResponse(isAccepted : boolean){
        if(isAccepted){

        } else[
            
        ]
    }
  }
});
</script>

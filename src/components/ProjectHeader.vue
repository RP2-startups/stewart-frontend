<template>
    <!--banner-->
    <img src="https://i.seadn.io/gae/0A54WU7el_5PyPxVWe5MQWkZqTXyRulMMyVLFbbaoEsIiTDg1dbJO-2HEM3t8GSP0qjYBZA78lsO1kCq18cI0Sy9BnZuQxe555Cf?auto=format&w=1920" 
    class="img-fluid" id="projectBanner" alt="banner" />

    <!--icone do projeto-->
    <img src="https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" 
    class="img-thumbnail" id="projectIcon" alt="icon">

    <!--nome do projeto-->
    <div class="container">
        <div class="row">

            <div class="col">
                <p class="mt-5">O Véio Safado</p>
            </div>
            
            <div class="col d-flex justify-content-center">
                <div class="row">
                    <div class="col">
                        <ul class="d-inline-flex">
                            <li
                            class="text-center p-3"
                            v-for="item in items"
                            :key="item.id"
                            :ref="'menu-item_' + item.id"
                            >
                                {{ item.value }}
                                <br />
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>

        </div>
        <div class="row">
            <div class="col">
                <p>Breve descrição do projeto... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.o</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
#projectBanner {
    top: 5rem;
    left: 0;
    position: absolute;
    z-index: -1;
}

#projectIcon {
    margin: 10rem 0 0 5rem;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    list: {
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
  },
  created: function () {
    this.loadAttr();
  },
  data() {
    return {
      items: [{id: 0, name: "" , value: ""}],
    };
  },
  methods: {
    loadAttr() {
      this.items.pop();
      var count: number = this.items.length;
      for (const element of this.list) {
        var item = { id: ++count, name: element.name , value: element.value};
        this.items.push(item);
      }
    },
  },
});
</script>

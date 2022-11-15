<template>
    <!--banner-->
    <img src="https://i.seadn.io/gae/0A54WU7el_5PyPxVWe5MQWkZqTXyRulMMyVLFbbaoEsIiTDg1dbJO-2HEM3t8GSP0qjYBZA78lsO1kCq18cI0Sy9BnZuQxe555Cf?auto=format&w=1920" 
    class="img-fluid" id="proj-banner" alt="banner" />

    <!--icone do projeto-->
    <img src="https://i.seadn.io/gae/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA?auto=format&w=256" 
    class="img-thumbnail" id="proj-icon" alt="icon">

    <!--nome do projeto-->
    <div id="proj-header">
        <div id="proj-top-row" class="row">

            <!--nome do projeto-->
            <div class="col">
                <p id="proj-title" class="fs-2 align-middle">O Véio Safado</p>
            </div>
            
            <!--estatisticas do projeto-->
            <div class="col d-flex justify-content-end">
                <ul id="proj-stats" class="d-inline-flex">
                    <li
                    class="proj-stat text-center ms-4"
                    v-for="item in items"
                    :key="item.id"
                    :ref="'menu-item_' + item.id"
                    >
                        <p class="proj-stat-item fs-2">
                            {{ item.value }}
                        </p>
                        <p class="fs-5">
                            {{ item.name }}
                        </p>
                    </li>
                </ul>   
            </div>

        </div>
        <div id="proj-bot-row" class="row">

            <!--descricao do projeto-->
            <div class="col">
                <p class="fs-4">Breve descrição do projeto... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.o</p>
            </div>

        </div>
    </div>
</template>
<style scoped>

#proj-banner {
    top: 5rem;
    left: 0;
    position: absolute;
    z-index: -1;
}

#proj-icon {
    height: max(15vh, 20vw);
    width: auto;
    margin: min(15vw, 660px) 0 0 min(10vw, 100px);
}

#proj-header {
    margin-inline: min(10vw, 100px);
}

#proj-top-row {
    height: min(max(20vh, 20vw), 100px);
}

#proj-title {
    position: relative;
    top:50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    margin: 0;
}

#proj-stats {
    margin: 0;
    padding: 0;
}

.proj-stat {
    height: min-content;
    position: relative;
    top:50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
}

.proj-stat-item {
    margin: 0;
}

#proj-bot-row {
    position: relative;
    top: 0;
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

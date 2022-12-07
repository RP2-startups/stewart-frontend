<template>
  <div class="container mt-4 mb-4">
    <ul class="list-group ">
      <li v-for="item in itens" class="list-item ">
        <img :src="('http://localhost:3001'+ item.project.picture.replace('.', ''))" class="item-pic" />
        <div class="item-title">
          <div class="d-flex w-100">
            <h5>{{ item.project.name }}</h5>
            
          </div>
          <p class="mb-1 item-desc">
            {{ item.message }}
          </p>
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
import ProjectDataService from "@/services/ProjectDataService";
import { defineComponent } from "vue";

type Notification = {
  user_id: number,
  project: {
    id: number,
    name: string,
    description: string
    picture: string
  },
  message: string;
  is_accepted: string;
};

export default defineComponent({
  created() {
    ProjectDataService.participations()
    .then(response => {
      response.data.forEach((notify: Notification) => {
        if (notify.is_accepted == "accepted") this.itens.push(notify)
      });
      
    })
  },
  data() {
    return {
      itens: [] as Notification[]
    };
  },
  methods : {
    inviteResponse(isAccepted : boolean, projectId : number){
        const project = {project_id: projectId}
        if(isAccepted){
            ProjectDataService.accept(project)
            .then(resp => { 
              location.reload()
            })
            .catch(e =>{ 
                console.log(e)
            })
        } else{
            ProjectDataService.reject(project)
            .then(resp => { 
              location.reload()
            })
            .catch(e =>{ 
                console.log(e)
            })
        }
    }
  }
});
</script>

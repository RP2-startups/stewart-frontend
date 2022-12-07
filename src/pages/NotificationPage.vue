<template>
  <div class="container mt-4 mb-4">
    <ul class="list-group ">
      <li v-for="item in itens" class="list-item ">
        <img :src="('http://localhost:3001'+ item.project.picture.replace('.', ''))" class="item-pic" />
        <div class="item-title">
          <div class="d-flex w-100">
            <h5 v-if="item.is_accepted=='pending'">{{ item.project.name }}</h5>
            <h5 v-else>{{ item.name + " deseja participar do projeto " + item.project.name }}</h5>
            
          </div>
          <p class="mb-1 item-desc">
            {{ item.message }}
          </p>
        </div>
        <div class="item-buttons" v-if="item.is_accepted == 'pending'">
          <img
            src="@/assets/icons/correct.svg"
            @click="inviteResponse(true,item.project.id)"
          />
          <img
            src="@/assets/icons/alpha-x-circle-outline.svg"
            @click="inviteResponse(false,item.project.id)"
          />
        </div>

        <div class="item-buttons" v-else>
          <img
            src="@/assets/icons/correct.svg"
            @click="inviteRequest(true,item.project.id, item.project.projectParticipations[0].user_id)"
          />
          <img
            src="@/assets/icons/alpha-x-circle-outline.svg"
            @click="inviteRequest(false,item.project.id, item.project.projectParticipations[0].user_id)"
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
import ProjectDataService from "@/services/ProjectDataService";
import UserDataService from "@/services/UserDataService";
import { defineComponent } from "vue";

type Notification = {
  name: string,
  project: {
    id: number,
    name: string,
    description: string
    picture: string
    projectParticipations: [{
      user_id: number
    }]
  },
  message: string;
  is_accepted: string;
};

export default defineComponent({
  created() {
    ProjectDataService.participations()
    .then(response => {
      response.data.forEach((notify: Notification) => {
        if (notify.is_accepted == "pending") this.itens.push(notify)
      });
      
    })
    ProjectDataService.getRequestsParticipations()
    .then(response =>
    response.data.forEach((notify: Notification) => {
      UserDataService.getUsers()
      .then((response => {
        response.data.forEach((element: any) => {
          if (element.id == notify.project.projectParticipations[0].user_id) {
            notify.name = element.name
            this.itens.push(notify)
          }
        });
      }))
    }))
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
    },
    inviteRequest(isAccepted : boolean, projectId : number, userId: number){
        const project = {project_id: projectId, user_id: userId}
        if(isAccepted){
            ProjectDataService.acceptRequest(project)
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

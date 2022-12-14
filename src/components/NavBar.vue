<script setup lang="ts">
import { RouterLink } from "vue-router";
import LoginModal from "../pages/LoginPage.vue";
import SearchBar from "./SearchBar.vue";
</script>

<template>
  <section id="stewart-main-navbar" ref="menu">
    <div class="d-inline-flex align-items-center p-2 justify-content-between">
      <div id="navbar-logo">
        <RouterLink class="title-hammersmith" to="/">STEWART</RouterLink>
      </div>
      <div>
        <SearchBar />
      </div>
      <button v-if="!isLogged" class="btn btn-login text-light" @click="open = true">
        LOGIN
      </button>
      <img v-else :src="('http://localhost:3001'+ profilePicture.replace('.', ''))" class="img-login rounded-circle" @click="toggleDropdown()" />
    </div>
  </section>
  <div class="dropdown-logged" v-if="dropdownView" :class="`${isSticked ? 'down' : ''}`">
    <div class="drop">
      <RouterLink to="/user" class="link">
        <p class="dropdown-item">Meu Perfil</p>
      </RouterLink>

      <RouterLink to="/my-projects" class="link">
        <p class="dropdown-item">Meus Projetos</p>
      </RouterLink>

      <RouterLink to="/notifications" class="link">
        <p class="dropdown-item">
        <div class="round">{{ countNotify }}</div>Notificações</p>
      </RouterLink>
      <hr />
      <p class="dropdown-item text-danger" @click="logout()"><b>Deslogar</b></p>
    </div>
  </div>
  <Transition name="modal">
    <div v-if="open" class="modal">
      <LoginModal @close="open = false" @getUserdata="getUserData()" />
    </div>
  </Transition>
</template>

<style scoped>
@import "../assets/styles/base.css";

.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
}

/* Para o <Transition> do Vue */
.modal-enter-active,
.modal-leave-active {
  transition: width 0.3s linear, opacity 0.3s linear;
}

.modal-enter-from,
.modal-leave-to {
  width: 0px;
  opacity: 0;
}

.menu {
  padding: 3rem;
  margin: 0;
  list-style-type: none;
  font-family: "Jost", "sans-serif";
  font-weight: bold;
  display: flex;
  align-items: center;
}

#stewart-main-navbar {
  z-index: 2;
  height: 5rem;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #071f3581;
}

.down {

  margin-top: 4.5rem;
}

.link {
  text-decoration: none;
  color: white;
}

.dropdown-logged {
  width: 20rem;
  background-color: #082846f8;
  position: fixed;
  right: 0;
  z-index: 999;
  padding: 1rem;
  margin-right: 0.5rem;
  border-radius: 1rem;
}

.round {
  height: 25px;
  width: 25px;
  background-color: rgb(5, 92, 223);
  border-radius: 50%;
  padding-left: 0.5rem;
  margin-right: 0.5rem;
}

.dropdown-item {

  display: flex;
  cursor: pointer;
  padding-left: 1rem;
  z-index: 999;
  border-radius: 30px;
  padding-left: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
}

.drop :hover {
  background-color: #13497cf8;
}


#navbar-logo .title-hammersmith {
  font-size: 1.6rem;
  color: rgba(255, 255, 255);
}

.menu-item {
  padding: 0.625rem;
  height: 100%;
  margin-left: 0.625rem;
  margin: 0 0.625rem;
  margin-right: 0.625rem;
  font-size: 1rem;
  user-select: none;
  -webkit-user-select: none;
}

.menu-link {
  align-items: center;
  text-decoration: none;
  color: var(---color-text-light);
}

.menu-slider {
  background-color: var(--color-pink);
  position: absolute;
  height: 0.25rem;
  left: 0;
  transition: all ease 0.3s;
  margin-top: 3rem;
}

.img-login {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}

.btn-login {
  background: rgba(196, 196, 196, 0.15);
  padding-right: 2rem !important;
  padding-left: 2rem !important;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  font-size: 0.8rem;
  border-radius: 10px;
  border-color: #f8f9fa;
}

.btn-login a {
  font-family: "Jost", sans-serif;
  text-decoration: none;
  font-style: bold;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "@/services/UserDataService";
import ProjectDataService from "@/services/ProjectDataService";

type Notification = {
  is_accepted: string;
};

export default defineComponent({
  components: { SearchBar },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    UserDataService.getLogin()
      .then(response => {
        this.isLogged = true
        this.profilePicture = response.data.user.profile_picture
        ProjectDataService.participations().then(response => {
          this.countNotify = response.data.filter((notification: Notification) => notification.is_accepted == "pending").length
        })
      })
      .catch(e => {
        this.isLogged = false
      })
  },
  data() {
    return {
      countNotify: 0,
      sliderPosition: 0,
      selectedElementWidth: 0,
      selectedIndex: 0,
      items: [{ id: 0, icon: "", name: "", comp: "" }],
      open: false,
      profilePicture: "",
      isSticked: false,
      dropdownView: false,
      isLogged: false
    };
  },

  methods: {
    handleScroll() {
      var element = this.$refs.menu as any;
      if (element != null) {
        if (window.scrollY > element.offsetTop) {
          element.classList.add("sticky");
          this.isSticked = true
        } else {
          element.classList.remove("sticky");
          this.isSticked = false
        }

      }
    },
    getUrl(path: String) {
      if (path == "")
        path = "user-circle-outline.svg"
      return new URL(`../assets/icons/${path}`, import.meta.url).href
    },
    toggleDropdown() {
      this.dropdownView = !this.dropdownView
    },
    getUserData() {
      UserDataService.getLogin()
        .then(response => {
          this.profilePicture = response.data.user.profile_picture
          this.isLogged = true
        })
        .catch(e => {
          this.isLogged = false
        })
    },
    logout() {
      UserDataService.logout()
        .then(response => {
          location.reload()
          this.isLogged = false
          this.dropdownView = false
        })
        .catch((e: any) => {
          console.log(e)
        });
    },
    getParticipations() {
      ProjectDataService.participations()
        .then(response => {
          console.log(response)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
});
</script>

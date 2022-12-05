import {ref} from "vue";

export const loginStore = ref({
    email: "",
    isLogged : false,
    setLogged(){
        this.isLogged = true
        return this.isLogged
    },
    setUnlogged(){
        this.isLogged = false
    }
})
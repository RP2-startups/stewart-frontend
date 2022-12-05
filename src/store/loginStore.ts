import {ref} from "vue";

export const loginStore = ref({
    isLogged : false,
    setLogged(){
        this.isLogged = true
    },
    setUnlogged(){
        this.isLogged = false
    }
})
<template>
<div class="container pt-5">
        <div class="form-container w-50 m-auto pt-5">
            <form @submit.prevent="login">
                <h2 class="text-dark text-center mb-5">Sign In</h2>

                <label for="email"> E-mail </label>
                <input  v-model="loginForm.email" type="email" class="form-control mb-4">
        
                <label for="password">Password</label>
                <input  v-model="loginForm.password" type="password" class="form-control mb-4">
               
                <button type="submit" class="btn btn-success d-block m-auto">Log in</button>
                <div class="text-center mt-3">Not registered ?  <NuxtLink to="/register" class="border-bottom text-danger">Create an account</NuxtLink></div>
            </form>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
const route = useRouter()

const isAuthenticated = ref(false)
let user = ref('')
const loginForm = ref({
    email:'',
    password:''
})
onMounted(() => {
    console.log(loginForm.value) // <div>
     user = JSON.parse(localStorage.getItem('user'))
    if(user){
        loginForm.value.email = user.email
        loginForm.value.password = user.password
    }
})
const login=()=>{   
    if(loginForm.value.email != user.email || loginForm.value.password != user.password){
        // ! need to use vee validate   
        return
    }

    isAuthenticated.value = true
    localStorage.setItem('isAuthenticated',JSON.stringify(isAuthenticated))
    route.push('/')    
}


</script>
<template lang="">
    <div class="container pb-5">
        <div class="form-container w-50 m-auto pt-5">
            <form @submit.prevent="registration">
              <h2 class="text-dark text-center pt-5">Sign Up</h2>

                <label for="userName">Username</label>
                <input v-model="registerForm.userName" type="text" class="form-control mb-4" required minLength="3">
        
                <label for="email">E-mail</label>
                <input v-model="registerForm.email" type="email" class="form-control mb-4" required>
        
                <label for="password">Password</label>
                <input v-model="registerForm.password" type="password" class="form-control mb-4" required minLength="8">
        
                <label for="confirmPassword"> Confirm password</label>
                <input v-model="registerForm.confirmPassword" type="password" class="form-control " required minLength="8">
                <span v-if="MatchingPassword" class="text-danger">*password does not match</span>

                <button  type="submit" class="btn btn-success d-block m-auto mt-4">Registration</button>
                <div class="text-center mt-3">already have an account ?  <NuxtLink to="/login" class="border-bottom text-danger fw-bold">log In</NuxtLink></div>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRouter()
const MatchingPassword = ref(false)

const registerForm = {
    userName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const registration =()=>{
    const {password,confirmPassword } = registerForm
    if(password != confirmPassword){
        MatchingPassword.value = true
        return
    }

        localStorage.setItem('user',JSON.stringify(registerForm))
        route.push('/login')     
}

// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })
</script>
<style lang="scss">

</style>
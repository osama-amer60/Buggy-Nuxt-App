<template lang="">
    <div class="container pb-5">
        <div class="form-container w-50 m-auto pt-5">
            <form @submit.prevent="">
              <h2 class="text-dark text-center pt-5">Sign Up</h2>

                <label for="userName">username</label>
                <input id="userName" type="text" class="form-control mb-4">
        
                <label for="email">e-mail</label>
                <input id="email" type="email" class="form-control mb-4">
        
                <label for="password">password</label>
                <input id="password" type="password" class="form-control mb-4">
        
                <label for="repeatPassword"> repeat password</label>
                <input id="repeatPassword" type="password" class="form-control mb-4">
        
                <div class="warningMsg text-center text-danger mb-3 d-none"> *please fill all fields</div>
                <button id="registrationBtn" type="submit" class="btn btn-outline-success d-block m-auto">Registration</button>

                <div class="text-center mt-3">already have an account ?  <NuxtLink to="/login" class="border-bottom text-danger">log In</NuxtLink></div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:'register'
}
</script>
<style lang="">
    
</style>
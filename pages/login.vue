<template>
<div class="container pt-5">
        <div class="form-container w-50 m-auto pt-5">
            <form action="">
                <h2 class="text-dark text-center mb-5">Sign In</h2>
                <label for="userName">username</label>
                <input id="userName" type="text" class="form-control mb-4">
        
                <label for="password">password</label>
                <input id="password" type="password" class="form-control mb-4">
               
                <div class="warningMsg text-center text-danger mb-3 d-none"> *please fill all fields</div>
                <button id="logInBtn" type="button" class="btn btn-outline-success d-block m-auto">log in</button>

                <div class="text-center mt-3">Not registered ?  <NuxtLink to="/register" class="border-bottom text-danger">Create an account</NuxtLink></div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:'login'
}
</script>
<style lang="">
    
</style>
<template>
    <div>
      <nav class="navbar navbar-expand-lg position-fixed w-100">
        <div class="container-fluid">
          <NuxtLink class="nav-link" to="/"><img src="../assets/img/logo.png" alt=""> </NuxtLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav  pt-2 mx-auto">
              <li class="nav-item">
                <NuxtLink class="nav-link " to="/products">Products</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link " to="/login">Login</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link " to="/register">Register</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>

<script lang="ts">
export default {

}
</script>
<style scoped>
  nav{
    background-color: #E3E6F3;
    z-index: 1;
    font-weight: bolder;
  }
  a:hover{
    color: #088178;
  }
</style>
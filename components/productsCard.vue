<template>
  <div class="col-6 col-md-6 col-lg-4 col-xl-3 p-2">
    <div class="card">
      <img :src="product.image" class="card-img-top p-4" style="height: 50vh;" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <NuxtLink   class="btn btn-success" :to="`/products/${product.id}`">  see more  </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
const title = product.title.slice(0,25)
</script>

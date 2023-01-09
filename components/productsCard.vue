<template>
  <div class="row">
    <div v-for="(product, index) in products" :key="index" class="col-12 col-md-6 col-lg-4 col-xl-4 p-2">
      <div class="card">
        <img :src="product.image" class="card-img-top p-4" style="height: 50vh;" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{product.title.slice(0,20)}}</h5>
          <NuxtLink   class="btn btn-success" :to="`/products/${product.id}`">  see more  </NuxtLink>
        </div>
      </div>
  </div>
</div>
</template>

<script setup>
  const { products } = defineProps(["products"]);
</script>

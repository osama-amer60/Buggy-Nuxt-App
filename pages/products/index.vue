<template lang="">
  <div>
    <div class="container pt-5">
      <div class="row pt-5">
          <productsCard :product="product" v-for="(product, index) in products" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

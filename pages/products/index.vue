<template lang="">
  <div>
    <div id="productsHeader">
      <h2>#stayhome</h2>
      <p>save more with coupons & up to 70% off!</p>
    </div>
    <div class="container ">
      <div class="row">
        <div class="col-12 col-md-3"><FilterAndSearch/></div>
        <div class="col-12 col-md-9">
            <productsCard :products="products" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
<style lang="scss" scoped>
#productsHeader{
  background-image: url('../../assets/img/banner/b1.jpg');
  background-size: cover;
    width: 100%;
    height: 40vh;
    color: #FFF;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding-top: 35px;
}
</style>
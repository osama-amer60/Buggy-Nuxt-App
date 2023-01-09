<template>
    <div>
        <div class="container">
      <h1 class="text-center">New Arrivals</h1>
      <p class="text-center">Summer Collection New Modern Design</p>
      <div  id="newArrivals" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-2 g-md-3">

        <div v-for="product in newProducts" class="col" id="cartContainer" role="button">
        <div class="card p-2">
            <img :src="product.image"  alt="...">
            <div class="card-body">
                <p class="card-text mb-1">{{product.category}}</p>
                <h5 class="card-title">{{product.title}}</h5>
                <!-- <div class="mb-2">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star "></i>
                  <i class="fa-solid fa-star "></i>
                </div> -->
                <span class="price">{{product.price}}</span>
            </div>
          </div>
        <!-- <div class="favorite-icon"><i class="fa-regular fa-heart fa-lg"></i></div>  -->
      </div>     

      </div>
    </div>
    </div>
</template>
<script>
    const { data: newProducts } = await useFetch("https://fakestoreapi.com/products?limit=4");
export default {

}
</script>
<style lang="">
    
</style>
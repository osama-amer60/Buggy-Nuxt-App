<template>
        <div class="container pb-5">
            <div class="row row-cols-1 row-cols-sm-2 pt-4">
                <div class="col">
                    <img :src="product.image"  class="w-100  p-5" alt="">
                </div>
                <div class="col p-5">
                    <h2> Title : {{product.title}}</h2>
                    <p>price : {{product.price}}</p>
                    <p>category : {{product.category}}</p>
                    <p>description : {{product.description}}</p>

                    <button class="btn btn-outline-success mx-2">Add To Card<svg width="36" height="23" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96z"/></svg></button>
                    <button class="btn btn-outline-success">Favorite <svg width="32" height="28" viewBox="0 0 512 512"><path fill="currentColor" d="m47.6 300.4l180.7 168.7c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l180.7-168.7c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141c-45.6-7.6-92 7.3-124.6 39.9l-12 12l-12-12c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></button>
                </div>
            </div>
        </div>
</template>

<script setup>
const { product } = defineProps(["product"]);

</script>


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
                </div>
            </div>
        </div>
</template>

<script setup>
const { product } = defineProps(["product"]);

</script>


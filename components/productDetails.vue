<template>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img :src="product.image"  class="w-100 h-75 p-5" alt="">
                </div>
                <div class="col-6 p-5">
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


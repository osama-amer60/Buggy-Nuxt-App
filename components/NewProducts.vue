<template>
    <div>
        <div class="container">
                <h1 class="text-center">New Arrivals</h1>
                <p class="text-center">Summer Collection New Modern Design </p>
                <div  id="newArrivals" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-2 g-md-3">
                    <div v-for="product in newProducts" class="col" id="cartContainer" role="button">
                        <div class="card rounded-5 p-2">
                            <img :src="product.image" class="p-2" style="height: 40vh;" alt="...">
                            <div class="card-body">
                                <p class="card-text mb-1">{{product.category}}</p>
                                <h5 class="card-title">{{product.title.slice(0,10)}}</h5>
                                <span class="price">{{product.price}} $</span>

                                <div class="mb-2 d-flex justify-content-between">
                                    <div>
                                        <svg width="1.13em" height="1em" viewBox="0 0 576 512"><path fill="#fff700" d="M259.3 17.8L194 150.2L47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5l105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2L316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                        <svg width="1.13em" height="1em" viewBox="0 0 576 512"><path fill="#fff700" d="M259.3 17.8L194 150.2L47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5l105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2L316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                        <svg width="1.13em" height="1em" viewBox="0 0 576 512"><path fill="#fff700" d="M259.3 17.8L194 150.2L47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5l105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2L316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                        <svg width="1.13em" height="1em" viewBox="0 0 1664 1600"><path fill="#fff700" d="m1186 925l257-250l-356-52l-66-10l-30-60l-159-322v963l59 31l318 168l-60-355l-12-66zm452-262l-363 354l86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236l-449 236q-23 12-40 12q-23 0-34-18.5t-6-51.5l86-500L25 663q-32-32-23-59.5T56 569l502-73L783 41q20-41 49-41q28 0 49 41l225 455l502 73q45 7 54 34.5t-24 59.5z"/></svg>                
                                        <Icon name="fa6-regular:star" />                                   
                                    </div>
                                    <div class="" >
                                        <svg width="32" height="28" viewBox="0 0 512 512"><path fill="currentColor" d="m47.6 300.4l180.7 168.7c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l180.7-168.7c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141c-45.6-7.6-92 7.3-124.6 39.9l-12 12l-12-12c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                        <svg width="36" height="28" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96z"/></svg>    
                                    </div>
                                
                                </div>
                            </div>

                        </div>
                    </div>     
                </div>
        </div>
    </div>
</template>
<script setup>
    const { data: newProducts } = await useFetch("https://fakestoreapi.com/products?limit=4");
</script>
<style lang="">
    
</style>

<template>
 <div class="container">
      <div class="row row-cols-1 row-cols-lg-2 g-3">
        <div class="col">
          <div class="banner1">
            <h5>Crazy deals</h5>
            <h1>buy 1 get 1 free</h1>
            <p>The best classic dress is on sale at cara</p>
            <NuxtLink to="/products"><button type="button" class="btn  bg-main btn1">Learn More</button> </NuxtLink>      
          </div>
        </div>
        <div class="col ">
          <div class="banner2">
            <h5>spring / summer</h5>
            <h1>Upcomming season</h1>
            <p>The best classic dress is on sale at cara</p>
            <NuxtLink to="/products"><button type="button" class="btn btn-light btn2">Collection</button></NuxtLink>        
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-lg-3 g-3 mt-4">
        <div class="col">
          <div class="banner3">
            <h4>SEASONAL SALE</h4>
            <span>Winter Collection -50% Off</span>
          </div>
        </div>
        <div class="col">
          <div class="banner4">
            <h4>NEW COLLECTION</h4>
            <span>Spring / Summer2022</span>
          </div>
        </div>
        <div class="col">
          <div class="banner5">
            <h4>T-SHIRTS</h4>
            <span>New Trendy Prints</span>
          </div>
        </div>
      </div>

    </div>
</template>

<script lang="ts">
export default {

}
</script>
<style>
.banner1, .banner2{
    background-size: cover;
    background-position: top 25% right 25%;
    color: #FFF;
    padding: 60px;
}
.banner1{
    background-image: url("../assets/img/banner/b17.jpg");
}
.banner2{
    background-image: url("../assets/img/banner/b10.jpg");
}
.banner3,
.banner4,
.banner5{
    background-size: cover;
    color: #FFF;
    padding: 80px 10px;
}
.banner3{
    background-image: url("../assets/img/banner/b7.jpg");
}
.banner4{
    background-image: url("../assets/img/banner/b4.jpg");
}
.banner5{
    background-image: url("../assets/img/banner/b18.jpg");
}
 .btn1{
    color: #FFF;
    background-color:#088178;

}
 .btn1:hover{
    background-color: #FFF;
    color: black;
}
 .btn2:hover{
    background-color:#088178;
    color: #FFF;
}

</style>
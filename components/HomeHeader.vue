<template>
  <div class="header">
    <span>Trade-in-offer</span>
    <h1>Super Value deals</h1>
    <h2>On all products</h2>
    <p>save more with coupons & up to 70% off!</p>
    <NuxtLink to="/products" class="shop-now">Shop Now</NuxtLink> 
  </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="scss">
.header{
    background-image:url('../assets/img/hero4.png');
    height: 95vh;
    width: 100%;
    background-size: cover;
    background-position:  top 5% right 25%;
    padding: 35vh 80px;
    
    h1{
      font-weight: bolder;
    }
    h2{
      color: #088178;
    }    
   
    .shop-now{
        background-image: url('../assets/img/button.png');
        background-size: cover;
        width: 20vh;
        padding: 10px;
        background-position: left 25% top 25%;
        color: #088178;
        text-decoration: none;
    }
        
}
@media only screen and (max-width: 600px){
  .header{
    padding: 20vh 20px;


  }
}
@media only screen and (min-width: 600px){
  .header{
    span{
      font-size: 20px;
      font-weight: 500;
    }
    h1{
      font-size: 70px;
    }
    h2{
      color: #088178;
      font-size: 50px;
    }

  }
}
</style>
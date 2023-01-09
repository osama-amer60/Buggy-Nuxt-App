<template>
<div id="newsLetter">
    <div class="container mt-5">
        <div class="row row-cols-1 row-cols-lg-2 text-white p-4">
        <div class="col">
            <h3>Sign Up For Newsletters</h3>
            <p>Get E-mail updates about our lastest shop ad <span>secial offers</span></p>
        </div>
        <div class="col">
            <div class="pt-2">
            <input class="form-control" type="text" placeholder="Your email address">
            <button class="btn mt-2"> Sign Up</button>
            </div>
        </div>
        </div>
    </div>
</div>
</template>
    
<script >
export default {

}
</script>
<style scoped lang="scss">
#newsLetter{
    background-color: #0C244E;
    
    button{
        background-color: #088178;
        color: #FFF;
    }
    span{
        color: orange;
        
    }
}
</style>
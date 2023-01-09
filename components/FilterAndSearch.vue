<template lang="">
      <!--filter category and search input-->
    <div class="py-5">
            <h4>Filters:</h4>
            <div class="mt-3">
                <label for="" class="form-label d-block"> Search By Name</label>
                <input type="text"  class="form-control" placeholder="Enter product's name">
            </div>
            <div class="mt-3">
                <label for="categories" class="form-label d-block"> Filter Product</label>
                <select name="" class="custom-select" id="categories">
                    <option value="allcategories">ALL Categories</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="electronics">electronics</option>
                    <option value="jewelery">jewelery</option>
                </select>
            </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
#categories {
    width: 100%;
    padding: 1vh;
    border: 1px solid;
    border-radius: 10px;
}
</style>
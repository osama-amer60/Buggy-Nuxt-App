<template lang="">
    <div>
        <div class="container mt-4">
            
            <NuxtLink class="nav-link active" to="/"><img src="../assets/img/logo.png" alt=""> </NuxtLink>
            <div class="row row-cols-2  row-cols-md-4 g-2 mt-3  ">
                <div class="col">
                    <div class="footercol1">
                        <h4>Contact</h4>
                        <p><span>Address:</span><br/> 562 Wellng rood, street32. Istanbul</p>
                        <p class="my-2"><span>Phone:</span><br/> +90 552 843 55 82</p>
                        <p><span>Hours:</span><br/> 10.00 - 18.00 Mon - Sat</p>
                    </div>
                </div>
                <div class="col">
                    <h4>About</h4>
                        <ul>
                            <li><NuxtLink to="/">About Us</NuxtLink></li>
                            <li><NuxtLink to="/">Delivery Information</NuxtLink></li>
                            <li><NuxtLink to="/">Privacy Policy</NuxtLink></li>
                            <li><NuxtLink to="/">Terms & Consitions</NuxtLink></li>
                            <li><NuxtLink to="/">Contact Us</NuxtLink></li>
                        </ul>
                </div>
                <div class="col">
                        <h4>My Account</h4>
                        <ul>
                            <li><NuxtLink to="/">Sign In</NuxtLink></li>
                            <li><NuxtLink to="/">View Cart</NuxtLink></li>
                            <li><NuxtLink to="/">My WishList</NuxtLink></li>
                            <li><NuxtLink to="/">Track My Order</NuxtLink></li>
                            <li><NuxtLink to="/">Help</NuxtLink></li>
                        </ul>
                </div>

                <div class="col">
                        <h4>Install App</h4>

                        <li class="mx-4">                   
                               <NuxtLink to="/"><svg width="29.9" height="32" viewBox="0 0 256 274"><path fill="#FFD900" d="M188.813 178.875c32.46-17.823 57.067-31.404 59.188-32.46c6.785-3.608 13.792-13.158 0-20.576c-4.453-2.333-28.428-15.491-59.188-32.46l-42.642 43.065l42.642 42.43Z"/><path fill="#F43249" d="M146.171 136.444L10.394 273.287c3.187.422 6.785-.423 11.027-2.755c8.906-4.875 103.318-56.434 167.392-91.647l-42.642-42.441Z"/><path fill="#00EE76" d="m146.171 136.444l42.642-42.853S30.971 7.45 21.421 2.365C17.823.234 13.791-.399 10.183.234l135.988 136.21Z"/><path fill="#00D3FF" d="M146.171 136.444L10.183.234C4.664 1.51 0 6.386 0 16.358v240.805c0 9.127 3.609 15.701 10.394 16.335l135.777-137.054Z"/></svg></NuxtLink>
                               <NuxtLink class="mx-3" to="/"><svg width="26.01" height="32" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/></svg></NuxtLink>
                        </li>
                        <div class="follow mt-4">
                        <h6 class="mx-4">Follow Us</h6>                
                            <li class="mx-4">                   
                               <NuxtLink to="/"><svg width="32" height="20" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"/></svg></NuxtLink>
                               <NuxtLink to="/"><svg width="39.2" height="20" viewBox="0 0 256 209"><path fill="#55acee" d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"/></svg></NuxtLink>
                               <NuxtLink to="/"><svg width="45.52" height="20" viewBox="0 0 256 180"><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"/><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg></NuxtLink>
                            </li>
                        </div>

                </div>  
            </div>
            <div class="mt-5 text-center">
                <p> @ 2022, OSAMA AMER - Nuxt Ecommerce </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.footercol1 p{
    margin-bottom: 1px;

    span{
    font-weight: bold;
}
}
li{
    list-style: none;
}
a{
    text-decoration: none;
    color: black;
}
a:hover{
    color: #088178;
}


</style>
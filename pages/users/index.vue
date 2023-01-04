<template lang="">
    <div class="text-center">
        <displayUsers v-if="showList" :users="users"/>
        <addUser v-else :users="users" :showListState="showListState"/>
        
        <button v-if="showList" type="button" class="btn btn-primary" @click="showListState">Add New User</button>



    </div>
</template>

<script setup>
    const users = [
        // {firstName:"osama",lastName:"amer",age:25,email:'osama@gmail.com'},
    ];

    
    let showList = ref(true);
    const showListState =() =>{
        showList.value = !showList.value
    }

    onMounted (()=>{
    
    const usersList = JSON.parse(localStorage.getItem("users")); 
    users.value = usersList 
    console.log(users.value);
    })  

    
</script>

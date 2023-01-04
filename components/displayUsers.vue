<template>
  <div class="container text-center">
    <table v-if="users.length" class="table table-striped table-hover">
      <thead>
        <tr>
          <th>user Image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Profile</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tBody>
        <tr v-for="(user, i) in users" :key="i">
          <td>
            <img :src="user.image" style="width: 10vh; height: 10vh" alt="" />
          </td>
          <td class="pt-4">{{ user.firstName }}</td>
          <td class="pt-4">{{ user.lastName }}</td>
          <td class="pt-4">{{ user.age }}</td>
          <td class="pt-4">{{ user.email }}</td>
          <td class="pt-4">
            <NuxtLink class="nav-link active" :to="`/users/${i}`"><Icon name="fa6-regular:share-from-square"  style="font-size: 30px;"/></NuxtLink>

            
          </td>
          <td class="pt-4">
            <button type="button" class="btn btn-success">update</button>
          </td>
          <td class="pt-4">
            <button type="button" class="btn btn-danger">delete</button>
          </td>
        </tr>
      </tBody>
    </table>
    <p v-else class="m-5 text-danger fw-bold fs-4">There is no users yet !</p>


  </div>
</template>

<script setup>
const { users } = defineProps(["users"]);


</script>

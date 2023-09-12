<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import axios from "axios";
</script>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:444/api/users/get")
      .then((response) => (this.users = response.data));
  },
  methods: {
   
  },
};
</script>

<template>
  <main>
    <ul>
      <li v-for="user in users" :key="user._id">{{user.name}} ({{ user.age }})</li>
    </ul>
    <RouterLink to="/teszt"><h3>masik</h3></RouterLink>
  </main>
</template>

<script setup lang="ts">
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
      .get("")
      .then((response) => (this.users = response.data));
  },
  methods: {
   
  },
};
</script>

<template>
  <main>
    HelloWorld
    <RouterLink to="/teszt"><h3>masik</h3></RouterLink>
  </main>
</template>

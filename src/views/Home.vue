<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <p>{{ food }}</p>

    <br />
    <button @click="getInfo">请求数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// import axios from "axios";
import { getUserInfo } from "@/api/user";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  props: {
    food: {
      type: String,
      default: "Apple",
    },
  },
  methods: {
    getInfo() {
      // this.$axios.post("/getUserInfo").then((res) => {
      //   console.log(res);
      // });
      getUserInfo({ userId: 21 }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

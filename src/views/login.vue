<template>
  <div>
    <p>
      <input v-model="userName" />
    </p>
    <p>
      <input v-model="password" type="password" />
    </p>
    <p><button @click="handleSubmit">登录</button></p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login_page",
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmit() {
      if (this.userName == "1" && this.password == "2") {
        console.log("登录成功");
      } else {
        console.log("登录失败");
      }
      this.login({ userName: this.userName, password: this.password });
    },
  },
};
</script>

<style></style>

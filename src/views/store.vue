<template>
  <div class="store">
    store page
    <!-- <a-input :value="inputValue" @input="handleInput"></a-input> -->
    <!-- <a-input v-model="inputValue"></a-input>
    <p>{{ inputValue }}</p> -->

    <!-- 兄弟组件之间的通信可以通过父组件进行 -->
    <a-input @input="handleInput"></a-input>
    <a-show :content="inputValue"></a-show>
    <p>{{ inputValue }} last letter is -> {{ inputValueLastLetter }}</p>
    <br />
    <p>appNameWithVersion: {{ appNameWithVersion }}</p>
    <p>{{ firstLetter }}</p>

    <p>store.state: {{ appName }}</p>
    <p>store.user.state: {{ userName }}</p>

    <button @click="changeAppName">修改appName</button>
    <br />
    <br />
    <button @click="updateAppName">异步修改appName</button>

    <br />
    <br />
    <br />
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
    <p v-for="(li, index1) in todoList1" :key="'li' + index1">{{ li }}</p>
  </div>
</template>

<script>
import AInput from "@/components/AInput";
import AShow from "@/components/AShow";
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
  createNamespacedHelpers,
} from "vuex";
// import { mapState } from "vuex";
// const mapState = createNamespacedHelpers("user");
export default {
  components: {
    AInput,
    AShow,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    // method1
    // appName() {
    //   return this.$store.state.appName;
    // },
    // appName1() {
    //   return this.$store.state.user.userName;
    // },
    // method2
    // ...mapState(["appName"]),
    // method3
    ...mapState({
      appName: (state) => state.appName,
      appVersion: (state) => state.appVersion,
      userName: (state) => state.user.userName,
      todoList: (state) => (state.todo ? state.todo.todoList : []),
      todoList1: (state) => (state.user.todo ? state.user.todo.todoList1 : []),
    }),
    ...mapGetters(["appNameWithVersion"]),
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1);
    },
    ...mapGetters("user", ["firstLetter"]),
    // appNameWithVersion() {
    //   return this.$store.getters.appNameWithVersion;
    // },
  },
  methods: {
    // mutations是方法，不能放computed中
    // actions用于异步请求
    ...mapMutations(["SET_APP_NAME"]),
    ...mapActions(["updateAppName"]),
    // ...mapActions("user/subUser", ["updateAppName"]),
    handleInput(val) {
      this.inputValue = val;
    },
    changeAppName() {
      // this.$store.commit("SET_APP_NAME", "New_appName");
      this.SET_APP_NAME("newADDDDD");
      this.$store.commit("SET_APP_VERSION");

      // 以下payload都是对象
      // this.$store.commit({
      //   type: "SET_APP_NAME",
      //   appName: "newAppName",
      // });
      // this.$store.commit("SET_APP_NAME", { appName: "new_appNAme" });
    },
    changeUserName() {
      // 区别 mapActions用法
      this.$store.dispatch("updateAppName", "123");
    },
    // 动态注册模块
    registerModule() {
      // 模块名，内容
      this.$store.registerModule("todo", {
        state: {
          todoList: ["学习Mutations", "学习Mutations1", "学习Mutations2"],
        },
      });
      // user模块中注册todo子模块，用数组的方式
      this.$store.registerModule(["user", "todo"], {
        state: {
          todoList1: ["学习Mutations333", "学习Mutations1", "学习Mutations2"],
        },
      });
    },
  },
};
</script>

<style></style>

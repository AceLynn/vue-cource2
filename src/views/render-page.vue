<template>
  <div class="render-page-con">
    <!-- <render-page></render-page> -->
    <!-- <ul @click="handleClick">
      <li
        @click.stop="handleClick"
        v-for="(item, index) in list"
        :key="`list_item_${index}`"
      >
        {{ item.name }}
      </li>
    </ul> -->
    <List :list="list" :style="{ color: 'red' }" :render="renderFunc">
      <!-- slot-scope的值为对应slot的对象名 可以通过count.调用相关属性 -->
      <count-to slot-scope="count" :end-val="count.number"></count-to>
    </List>
  </div>
</template>

<script>
// import RenderPage from "_c/render-page";
import List from "_c/list";
// 用render写 可以不用在components里面注册
import CountTo from "_c/count-to";

export default {
  components: {
    List,
    CountTo
    // RenderPage,
  },
  data() {
    return {
      // list: [{ name: "lison" }, { name: "lilisi" }],
      list: [{ number: 100 }, { number: 45 }],
    };
  },
  methods: {
    handleClick(event) {
      console.log(event);
    },
    handleEnd() {
      console.log("handleEnd");
    },
    // renderFunc(h, name) {
    //   return h("i", {
    //     style: {
    //       color: "pink",
    //     },
    //   }, name);
    // },
    renderFunc(h, number) {
      return (
        <CountTo
          on-animation-end={this.handleEnd}
          nativeOn-click={this.handleClick}
          endVal={number}
          style={{ color: "pink" }}
        ></CountTo>
        // <i on-click={this.handleClick} style={{ color: "pink" }}>
        //   {name}
        // </i>
      );
    },
  },
};
</script>

<style lang="scss"></style>

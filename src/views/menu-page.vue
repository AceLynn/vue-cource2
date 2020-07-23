<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-submenu>
        <div slot="title">标题333</div>
        <a-menu-item>3333-11</a-menu-item>
        <a-submenu>
          <div slot="title">标题333-22</div>
          <a-menu-item>3333-22-11</a-menu-item>
          <a-menu-item>3333-22-22</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <!-- v-if !item.children 类似终止条件必须有，否则会死循环 -->
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{
          item.title
        }}</a-menu-item>
        <re-submenu
          v-else
          :key="`menu_item_${index}`"
          :parent="item"
          :index="index"
        ></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import menuComponents from "_c/menu";
import ReSubmenu from "./re-submenu.vue";
const { AMenu, AMenuItem } = menuComponents;
export default {
  name: "menu-page",
  components: {
    // ...menuComponents,
    AMenu,
    AMenuItem,
    ReSubmenu,
  },
  data() {
    return {
      list: [
        { title: "1111" },
        { title: "2222" },
        {
          title: "3333",
          children: [
            { title: "3333-111" },
            {
              title: "3333-222",
              children: [
                { title: "3333-222-11" },
                { title: "3333-222-22" },
                { title: "3333-222-33" },
              ],
            },
            { title: "3333-333" },
          ],
        },
        { title: "4444" },
      ],
    };
  },
};
</script>

<style lang="scss">
.menu-box {
  width: 300px;
  height: 400px;
}
</style>

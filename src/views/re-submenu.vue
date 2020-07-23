<template>
  <a-submenu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="(item, i) in parent.children">
      <a-menu-item v-if="!item.children" :key="`menu_item_${index}_${i}`">{{
        item.title
      }}</a-menu-item>
      <re-submenu
        v-else
        :key="`menu_item_${index}_${i}`"
        :parent="item"
      ></re-submenu>
    </template>
    <!-- 调用自身组件，需要设置终止条件，避免死循环 -->
    <!-- <a-menu-item> </a-menu-item>
    <re-submenu></re-submenu> -->
  </a-submenu>
</template>

<script>
import menuComponents from "_c/menu";
const { AMenu, AMenuItem, ASubmenu } = menuComponents;
export default {
  // 递归组件中，name值很重要
  // 有name才能够引用当前的自身组件
  name: "ReSubmenu",
  components: {
    AMenuItem,
    ASubmenu,
  },
  props: {
    parent: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style></style>

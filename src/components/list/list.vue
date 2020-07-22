<template>
  <div class="list">
    <ul>
      <li
        @mousemove.prevent="handleMove"
        v-for="(item, index) in list"
        :key="`item_${index}`"
      >
        <!-- <span v-if="!render">{{ item.number }}</span>
        <render-dom
          v-else
          :render-func="render"
          :number="item.number"
        ></render-dom> -->
        <slot :number="item.number"></slot>
      </li>
      <!-- <li v-for="(item, index) in list" :key="`item_${index}`">
        <span v-if="!render">{{ item.name }}</span>
        <render-dom v-else :render-func="render" :name="item.name"></render-dom>
      </li> -->
    </ul>
  </div>
</template>

<script>
// import RenderDom from "_c/render-dom";
export default {
  name: "List",
  components: {
    // RenderDom,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    render: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleMove(event) {
      // 阻止标签默认行为 比如选中变色，链接点击变色等
      event.preventDefault();
    },
  },
};
</script>

<style></style>

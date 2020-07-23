<template>
  <li class="a-menu-item"><slot></slot></li>
</template>

<script>
export default {
  name: "AMenuItem",
};
</script>

<style lang="scss">
.a-menu-item {
  background: #369;
  color: #fff;
}
</style>

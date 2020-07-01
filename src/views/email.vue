<template>
  <div class="email">
    this is email
    <p>
      <button @click="handleClick">Click me!</button>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$bus.$emit("on-click", "hello");
    },
  },
  mounted() {
    console.log(this.$bus);
  },
};
</script>

<style>
.email {
  border: 1px solid #369;
}
</style>

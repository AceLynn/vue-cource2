<template>
  <div class="tel">
    this is tel

    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    this.$bus.$on("on-click", (mes) => {
      this.message = mes;
    });
  },
};
</script>

<style>
.tel {
  border: 1px solid #f80;
}
</style>

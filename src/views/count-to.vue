<template>
  <div>
    <count-to ref="countTo" :endVal="endVal" @animation-end="handleEnd">
      <span slot="left">总金额：</span>
      <span slot="right"> 元</span>
    </count-to>
    <button @click="getNumber">获取数值</button>
    <button @click="update">更新数值</button>
  </div>
</template>

<script>
import CountTo from "@/components/count-to";
export default {
  components: {
    CountTo,
  },
  data() {
    return {
      endVal: 100,
    };
  },
  methods: {
    handleEnd(endVal) {
      console.log("end num is: ", endVal);
    },
    getNumber() {
      this.$refs.countTo.getCount();
    },
    update() {
      this.endVal += Math.random() * 100;
    },
  },
};
</script>

<style></style>

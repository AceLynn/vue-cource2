<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent }">
      <button @click="click">click</button>
    </div>
    <div
      class="pane-trigger"
      @mousedown="handleMousedown"
      :style="{ left: triggerLeft, width: `${triggerWidth}px` }"
    ></div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent }"></div>
  </div>
</template>

<script>
export default {
  name: "SplitPane",
  props: {
    triggerWidth: {
      type: Number,
      default: 8,
    },
    min: {
      type: Number,
      default: 0.1,
    },
    max: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      leftOffset: 0.3,
      isMove: false,
      initOffset: 0, // 拖动条初始宽度
    };
  },
  computed: {
    // vue 里都从更改数据入手，进来不要修改 DOM
    leftOffsetPercent() {
      return `${this.leftOffset * 100}%`;
    },
    triggerLeft() {
      return `calc(${this.leftOffset * 100}% - ${this.triggerWidth / 2}px)`;
    },
  },
  methods: {
    click() {
      this.leftOffset -= 0.02;
    },
    handleMousedown(event) {
      document.addEventListener("mousemove", this.handleMousemove);
      document.addEventListener("mouseup", this.handleMouseup);
      this.initOffset =
        event.pageX - event.srcElement.getBoundingClientRect().left;
      this.isMove = true;
    },
    handleMousemove(event) {
      // console.log(this.$refs.outer.getBoundingClientRect())
      // 鼠标左边坐标 - 容器左边起点 = 新的定位 left
      // console.log(event.pageX - this.$refs.outer.getBoundingClientRect().left);
      if (!this.isMove) return;
      const outerRect = this.$refs.outer.getBoundingClientRect();
      let offsetPercent =
        (event.pageX -
          outerRect.left +
          this.triggerWidth / 2 -
          this.initOffset) /
        outerRect.width;
      if (offsetPercent < this.min) {
        offsetPercent = this.min;
      }
      if (offsetPercent > this.max) {
        offsetPercent = this.max;
      }
      this.leftOffset = offsetPercent;
      // event.pageX;
    },
    handleMouseup() {
      this.isMove = false;
    },
  },
  destroy() {
    window.removeEventListener("mousemove");
    window.removeEventListener("mouseup");
  },
};
</script>

<style lang="scss">
.split-pane-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .pane {
    height: 100%;
    position: absolute;
    top: 0;
    // width: 50%;
    // display: inline-block;
    // float: left;
    &-left {
      width: 30%;
      background: palevioletred;
    }
    &-right {
      // left: 30%;
      right: 0;
      bottom: 0;
      background: paleturquoise;
    }
    &-trigger {
      height: 100%;
      position: absolute;
      background: purple;
      top: 0;
      z-index: 1;
    }
  }
}
</style>

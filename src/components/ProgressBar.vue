<template>
  <div class="progress-bar"></div>
</template>

<script>
export default {
  props: {
    // totalStages代表整个过程的阶段数
    totalStages: { type: Number, default: 1 },
    // currentStage代表当前所进行到的阶段
    currentStage: { type: Number, default: 0 }
  },
  computed: {
    oneStageWidth() {
      // 除去开头为显示组件预留的10%，将剩余长度均分
      return 90/this.totalStages;
    }
  },
  watch: {
    currentStage(val, oldVal) {
      // 当currentStage变化时，过程进行到了该阶段
      this.continueTo(val);
      // 当该阶段为最终阶段时，过程结束
      if(val === this.totalStages) {
        this.finish();
      }
    }
  },
  methods: {
    continueTo(stage) {
      // 进行到stage阶段时，设置ProgressBar的长度
      this.$el.style.width = `${stage*this.oneStageWidth + 10}%`;
    },
    finish() {
      this.$el.style.width = "100%";
      // 设置延时是为了让组件能够完成transition
      setTimeout(() => this.$emit("finish-progress"), 1000);
    }
  },
  mounted() {
    this.$el.style.width = "10%";
  }
}
</script>
  
<style scoped>
.progress-bar {
  width: 0;
  height: 0.25rem;
  background-color: #80bd01;
  transition: 1s;
}
</style>
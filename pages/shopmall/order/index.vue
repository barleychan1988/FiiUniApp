<template>
  <view class='content'>
    <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#007aff"></uni-segmented-control>
    <view v-if="current === 0">
        选项卡1的内容
    </view>
    <view v-if="current === 1">
        选项卡2的内容
    </view>
  </view>
</template>
<script>
  import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
  export default {
    components: {uniSegmentedControl},
    data() {
      return {
        items: ['插件订单','商城订单'],
        current: 0        
      }
    },
    methods: {
      onClickItem(e) {
        if (this.current !== e.currentIndex) {
          this.current = e.currentIndex;
        }
      }      
    }
  }
</script>
<style lang='scss' scoped>
  .content {
    overflow-x: hidden;
    .segmented-control {
      background-color: $uni-color-primary;
      .segmented-control__text {
        span {
          color: $uni-text-color-grey;
        }
      }
    }
  }
</style>
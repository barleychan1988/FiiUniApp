
<template>
  <view class='accessoryview-password-visible-switch' @click="clickToogleVisible">
    <image class="arrow" mode="widthFix" :src="icon" />    
  </view>
</template>

<script>
  import iconHidden from "@/static/components/icon-yincnag-hui@3x.png";
  import iconShow from "@/static/components/icon-xianshi@3x.png";
  export default {
    data() {
      return {
        icon: iconHidden,
        isShow: false
      }
    },
    methods: {
      clickToogleVisible() {
        this.isShow = !this.isShow;
        if (this.isShow) {
          this.icon = iconShow;
        } else {
          this.icon = iconHidden;
        }
        this.$emit('toogleVisible', this.isShow)
      }
    }
  }
</script>

<style lang='scss' scoped>
  .accessoryview-password-visible-switch {
    overflow-x: hidden;
    margin: auto 30rpx;
    height: 100%;
    display: flex;
    align-items: center;
    .arrow {      
      width: 28rpx;
    }
  }
</style>
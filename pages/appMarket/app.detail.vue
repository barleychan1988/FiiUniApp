<template>
  <view class='content'>
    <view class="top">
      <image class="icon" mode="widthFix" :src="'/static/appmall/APP.png'"/>
      <view class="introduce">
        <text class="title">智能生活</text>
        <text class="desc">简介：海量智能设备正在陆续接入中，敬请期待~</text>
      </view>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    onLoad(options) {
      // this.getDetail(options.id)
    },
    methods: {
      getDetail(id) {
        this.request({
          url: `${this.api.SiriusFly.DETAIL}?sn=${id}`
        })
        .then(res => {
          this.siriusFlyInfo = res;
        });
      }      
    }
  }
</script>
<style lang='scss' scoped>
.content {
  overflow-x: hidden;
  .top {
    display: flex;
    padding: 60rpx 0;
    .icon {
      width: 88rpx;
      margin: auto 60rpx;
    }
    .introduce {
      flex: 1;
      .title {
        display: block;
      }
    }
  }
}
</style>
<template>
  <scroll-view class='content' scroll-y="true" enable-back-to-top refresher-enabled>
    <view class="product-item" @click="clickedProductItem">
      <image class="product-picture" mode="widthFix" :src="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606208534930&di=be0007c8a67c516bd9dc50bedcf0385c&imgtype=0&src=http%3A%2F%2Fimg010.hc360.cn%2Fm4%2FM03%2F5B%2F1B%2FwKhQ6VR5LjKEF1FrAAAAAA5rkmg518.jpg'" />
      <view class="item-content-wrapper">
        <view class="row">
          <text class="name">DTU</text>
          <text class="price">￥300.00</text>
        </view>
        <text class="desc">DTU (Data Transfer unit)，是专门用于将串口数据转换为IP数据或将IP数据转换为串口数据通过无线通信网络进行传送的无线终端设备。</text>
      </view>
    </view>    
    <view class="product-item">
      <image class="product-picture" mode="widthFix" :src="'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=924762339,1405857976&fm=26&gp=0.jpg'" />
      <view class="item-content-wrapper">
        <view class="row">
          <text class="name">DTU</text>
          <text class="price">￥300.00</text>
        </view>
        <text class="desc">DTU广泛应用于气象、水文水利、地质等行业。DTU同时也是世界顶尖理工大学丹麦技术大学 (Technical University of Denmark) </text>
      </view>      
    </view>    
  </scroll-view>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      clickedProductItem() {
        uni.navigateTo({url: '/pages/shopmall/product/detail'});        
      }
    }
  }
</script>
<style lang='scss' scoped>
  .content {
    overflow-x: hidden;
    .product-item {
      display: flex;
      background-color: white;
      margin-top: 10rpx;
      padding: 30rpx;
      .product-picture {
        width: 200rpx;
        margin: auto 0;
      }
      .item-content-wrapper {
        flex: 1;
      }
      .row {
        display: flex;
        .name {
          flex: 1;
          color: $uni-text-color;
        }
        .price {
          color: #ce0000;
        }
      }
      .desc {
        color: $uni-text-color-grey;
        font-size: $uni-font-size-sm;
      }
    }
  }
</style>
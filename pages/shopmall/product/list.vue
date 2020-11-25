<template>
  <scroll-view class='content' scroll-y="true" enable-back-to-top refresher-enabled @refresherrefresh="handleRefresh" :refresher-triggered="refreshing">
    <view class="product-item" @click="clickedProductItem" v-for="(product, index) in products" :key="index">
      <image class="product-picture" mode="widthFix" :src="product.picture" />
      <view class="item-content-wrapper">
        <view class="row">
          <text class="name">{{product.name}}</text>
          <text class="price">{{'￥' + product.price}}</text>
        </view>
        <text class="desc">{{product.desc}}</text>
      </view>      
    </view>    
  </scroll-view>
</template>
<script>
  export default {
    data() {
      return {
        products: [
          {
            name: 'DTU',
            desc: 'DTU (Data Transfer unit)，是专门用于将串口数据转换为IP数据或将IP数据转换为串口数据通过无线通信网络进行传送的无线终端设备。',
            price: 300,
            picture: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=924762339,1405857976&fm=26&gp=0.jpg'
          },
          {
            name: 'WTI原油期货',
            desc: 'WTI原油期货日内连续冲破44美元、45美元两道关口，盘中最高涨幅达5%。最终WTI 1月原油期货收涨4.29%，报44.91美元/桶，创3月6日以来的逾八个月新高。',
            price: 44.91,
            picture: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=924762339,1405857976&fm=26&gp=0.jpg'
          },
          {
            name: '大衣哥的大衣',
            desc: '数据转换为IP数据或将IP数据转换为串口数据通过无线通信网络进行传送的无线终端',
            price: 710,
            picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606208534930&di=be0007c8a67c516bd9dc50bedcf0385c&imgtype=0&src=http%3A%2F%2Fimg010.hc360.cn%2Fm4%2FM03%2F5B%2F1B%2FwKhQ6VR5LjKEF1FrAAAAAA5rkmg518.jpg'
          }
        ],
        refreshing: false
      }
    },
    methods: {
      clickedProductItem() {
        uni.navigateTo({url: '/pages/shopmall/product/detail'});        
      },
      handleRefresh() {
        console.log('handleRefresh');
        this.refreshing = true;
        setTimeout(() => {
          this.refreshing = false;          
        }, 2000);
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
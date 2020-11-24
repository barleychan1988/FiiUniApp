<template>
	<view class="content">
		<swiper class="banner" circular indicator-dots :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item, index) in banner" :key="index + ''">
				<image :src="item.image" mode="heightFix" class="banner-image" />
			</swiper-item>
		</swiper>
		<view class="segment-wrapper">
			<view class="segment">
				<view class="flex" />
				<image class="icon" mode="widthFix" src="@/static/shopmall/icon_order.png" />
				<button class="btn" @click="clickedMyOrder">我的订单</button>
				<view class="flex" />
				<view class="separator-line-v" />
			</view>
			<view class="segment">
				<view class="flex" />
				<image class="icon" mode="widthFix" src="@/static/shopmall/icon_order.png" />
				<button class="btn" @click="clickedMyCoupon">优惠券</button>
				<view class="flex" />
			</view>
		</view>
		<view class="list">
			<order-list v-if="current === 1"></order-list>
			<product-list v-if="current === 0" />
		</view>
	</view>
</template>

<script>
	import {uniSegmentedControl} from '@dcloudio/uni-ui';
	import orderList from './order-list'
	import productList from './product/list'
	export default {
		components: {
			uniSegmentedControl,
			orderList,
			productList
		},
		data() {
			return {
				banner: [
					{
						id: 1,
						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605269099253&di=eadb8d33749dbcbff0560023526d66be&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw700h438%2F20180310%2Fb759-fxpwyhw6528483.jpg'
					},
					{
						id: 2,
						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605269124834&di=ffad09b91ac6ee4a597c10365410ad4c&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Forignal%2F7376b3dftc0a23682b115%26690'
					}
				],
				autoplay: true,
				interval: 2000,
				duration: 500,

				current: 0,
				items: [
					{
						title: '我的订单',
						icon: ''
					},
					{
						title: '优惠券',
						icon: ''
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			clickedMyOrder() {
        uni.navigateTo({url: '/pages/shopmall/order/index'});
			},
			clickedMyCoupon() {
        uni.navigateTo({url: '/pages/shopmall/order/index'});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		>.banner {
			height: 500rpx;
			.banner-image {
				height: 500rpx;
			}
			uni-swiper-item {
				background-color: white;
				text-align: center;
			}
			swiper-item {
				background-color: white;
				text-align: center;
			}
		}
		>.segmented-control {
			background-color: white;
			height: 116rpx;
		}
		.list {
			height: calc(100% - 616rpx);
		}
		.segment-wrapper {
			display: flex;
			background-color: white;
			.segment {
				display: flex;
				flex: 1;
				.icon {
					width: 40rpx;
					margin: auto 0;
				}
				.btn {
					background-color: white;
					padding: 0 10rpx;
				}
				.btn::after {
					border: 0;
				}
				.flex {
					flex: 1;
				}
				.separator-line-v {
					height: 50%;
					width: 1px;
					background-color: $uni-border-separator;
					margin: auto 0;
				}
			}
		}
	}
</style>

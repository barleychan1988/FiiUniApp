<template>
	<view class="content">
		<swiper class="banner" circular indicator-dots :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item, index) in banner" :key="index + ''">
				<image :src="item.image" mode="heightFix" class="banner-image" />
			</swiper-item>
		</swiper>
		<uni-segmented-control :current="current" :values="items.map(item => item.title)" @clickItem="onClickItem" style-type="text" active-color="#007aff"></uni-segmented-control>
		<view class="list">
			<order-list v-if="current === 0"></order-list>
			<view v-if="current === 1">您还未领取</view>
		</view>
	</view>
</template>

<script>
	import {uniSegmentedControl} from '@dcloudio/uni-ui';
	import orderList from './order-list'
	export default {
		components: {
			uniSegmentedControl,
			orderList
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
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
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
	}
</style>

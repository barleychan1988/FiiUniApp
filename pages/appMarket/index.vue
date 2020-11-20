<template>
	<view class="content">
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickSegmentedItem" style-type="text" active-color="#007aff"></uni-segmented-control>
		 <view>
				<installedApp v-if="current === 0"></installedApp>
				<mostUsedApp v-if="current === 1"></mostUsedApp>
				<paidApp v-if="current === 2"></paidApp>
				<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		</view>
	</view>
</template>

<script>
	import {uniSegmentedControl} from '@dcloudio/uni-ui';
	import installedApp from './installed'
	import mostUsedApp from './mostUsedApp'
	import paidApp from './paidApps'
	export default {
		components: {
			uniSegmentedControl,
			installedApp,
			mostUsedApp,
			paidApp
		},
		data() {
			return {
				items: ['已安装应用','大家都在用','付费应用'],
				current: 0,
				showLoadMore: false,
				loadMoreText: "加载中...",
			}
		},
		onLoad() {

		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
			this.initData();
		},
		onReachBottom() {
			console.log("onReachBottom");
			if (this.max > 40) {
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			this.showLoadMore = true;
			setTimeout(() => {
				this.setListData();
			}, 300);
		},
		methods: {
			onClickSegmentedItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			initData(){
				uni.stopPullDownRefresh();
			},
			setListData() {
				let data = [];
				this.max += 10;
				for (var i = this.max - 9; i < this.max + 1; i++) {
					data.push(i)
				}
				this.data = this.data.concat(data);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: white;
		height: fit-content;
		.segmented-control {
			width: 100%;
		}
	}
</style>

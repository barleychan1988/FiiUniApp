<template>
	<view class="content">
		<uni-nav-bar statusBar="true" :backgroundColor="nav_bar_bk_color" color="white" fixed="true" @clickLeft="handleAccount" @clickRight="handleClickMore" :border="nav_border">
			<block slot="left">
				<image src="../../static/figure.png" class="nav_btn_icon"></image>
			</block>
			<!-- #ifndef MP-WEIXIN -->
			<block slot="right">
				<image src="@/static/common/icon-more-white.png" class="nav_btn_icon"></image>
			</block>
			<!-- #endif -->
			<view class="nav_title_view" @click="toogleHenbListVisible">
				<view><text class="uni-nav-bar-text">{{selectedHeNB && selectedHeNB.SN || '请选择设备'}}</text></view>
				<image class="arrow-down" mode="widthFix" src="@/static/common/arrow-down-white.png"/>
			</view>
		</uni-nav-bar>
		<view class="header-wrapper">
			<view class="header">
				<view class="row">
					<view class="speed upload">
						<text class="value">30</text>
						<view class="valueExt">
							<uni-icons type="arrowthindown" size="10" color="white"></uni-icons>
							<text class="unit">kb/s</text>					
						</view>
					</view>
					<image src="../../static/device.png" class="deviceIcon"></image>
					<view class="speed">
						<text class="value">50</text>
						<view class="valueExt">
							<uni-icons type="arrowthinup" size="10" color="white"></uni-icons>
							<text class="unit">kb/s</text>					
						</view>
					</view>
				</view>
				<view class="row-device">
					<text class="deviceId">{{title}}</text>
				</view>
			</view>		
			<div class="deviceDesc">{{deviceDescription}}</div>
		</view>
		<sirius-fly-list class="list" ref="siriusList" @refreshEnd="handleRefreshEnd"/>
    <uni-popup ref="popup" type="top">
			<henb-list class="henb-list" @selectItem="changedHeNBSelected" :currentSelected="selectedHeNB" />			
		</uni-popup>
	</view>
</template>

<script>
	import {uniNavBar, uniIcons, uniList} from '@dcloudio/uni-ui';
	import henbList from './henb.list';
	import siriusFlyList from './siriusfly.list';
	export default {
		components: {
			uniNavBar,
			uniIcons,
			uniList,
			henbList,
			siriusFlyList
		},
		data() {
			return {
				nav_border: false,
				nav_bar_bk_color: '#007aff',
				deviceDescription: '深圳电信  主网络接入设备4/6',
				selectedHeNB: null,

				title: ''
			}
		},
		onLoad() {
			uni.$on('refresh', () => {
				this.$refs.siriusList.refreshList();
			});
			const app = getApp();
			if (app.globalData.userInfo.token) {
				this.request({
					url: this.api.Account.GET_USER_INFO
				}).then(res => {
					if (res) {
						const userInfo = getApp().globalData.userInfo;
						userInfo.info = res;
						this.selectedHeNB = res.henb;
					} else {
						app.globalData.utils.navigateToLogin();
					}
				}, err => {
					app.globalData.utils.navigateToLogin();
				});
			}
		},
		methods: {
			handleAccount() {
        uni.navigateTo({url: '/pages/account/mine'});
			},
			handleClickMore() {
				console.log('handleClickMore');
			},

			toogleHenbListVisible() {
        this.$refs.popup.open();
			},
			changedHeNBSelected(henb) {
				this.request({
					url: this.api.HeNB.SET_SELECT,
					method: 'POST',
					data: {sn: henb.SN}
				}).then(res => {
					this.selectedHeNB = henb;
					this.$refs.popup.close();
				}, err => {

				})
			},

			// 下拉刷新完成
			handleRefreshEnd() {
				uni.stopPullDownRefresh();
			}
		},
		onPullDownRefresh() {
			this.$refs.siriusList.refreshList();
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 50px);
		.nav_btn_icon {
			width: 70rpx;
			height: 70rpx;
			vertical-align: middle;
		}
		.nav_title_view {
			/* #ifndef APP-PLUS-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			flex: 1;
			align-items: center;
			justify-content: center;
			.arrow-down {
				width: 44rpx;
			}
		}
		.header-wrapper {
			position: relative;
			font-size: 0;
			width: 100%;
			>.header {
				background-color: $uni-color-primary;
				color: white;
				box-sizing: border-box;
				padding: 15rpx 0;
				>.row {
					>.deviceIcon {
						width: 60rpx;
						height: 60rpx;
						vertical-align: middle;
					}
					>.speed {
						display: inline-block;
						vertical-align: middle;
						width: calc(50% - 30rpx - 1px);
						box-sizing: border-box;
						padding-left: 30rpx;
						>.value {
							font-size: 24px;
							vertical-align: middle;
						}
						>.valueExt {
							display: inline-block;
							vertical-align: middle;
							>.unit {
								font-size: 10px;
								display: block;
							}
							>uni-icons {
								display: block;
								text-align: left;
							}
							>uni-text {
								display: block;
								text-align: left;
							}
						}
					}
					>.upload {
						text-align: right;
						padding-left: 0;
						padding-right: 30rpx;
					}
				}
				.row-device {
					text-align: center;
					margin-top: 15rpx;
					font-size: 12px;
				}
			}
			>.deviceDesc {
				background-color: $uni-bg-color-grey;
				text-align: right;
				width: 100%;
				height: 50rpx;
				line-height: 50rpx;
				font-size: 10px;
				color: #a1a1a1;
				padding-right: 16rpx;
				box-sizing: border-box;
			}
		}
		.list {
			width: 100%;
			height: calc(100% - var(--status-bar-height));
		}
		.henb-list-popview {
			position: fixed;
			top: 88rpx;
			/* #ifdef MP */
			top: calc(88rpx + var(--status-bar-height));
			/* endif */
			width: 100vw;
			height: calc(100vh - 88rpx);
			.background-view {
				background-color: black;
				opacity: 0.35;
				width: 100%;
				height: 100%;
			}
			.henb-list {
				background-color: white;
				width: 100%;
				height: 162 * 4rpx;
				overflow-y: auto;
				position: absolute;
				top: 0;
			}
		}
		.henb-list {
			width: 100vw;
			top: calc(88rpx + var(--status-bar-height));
			position: absolute;
			max-height: 162*3rpx;
			overflow-y: auto;
		}
	}
	/* #ifdef MP-WEIXIN */
	.content {
		height: 100vh;
	}
	/* #endif */
</style>

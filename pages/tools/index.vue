<template>
	<view class="content">
		<view class="section-list" v-for="(item, index) in items" :key="index + item.title">
			<view class="section-title">{{item.title}}</view>
			<uni-grid :column="3" class="section-content">
				<uni-grid-item v-for="(itemSecondLevel, indexSecondLeve) in item.items" :key="'' + indexSecondLeve + item.title">
					<view class="item-content">
						<image :src="itemSecondLevel.icon" class="item-icon" mode="widthFix" />
						<text class="text">{{itemSecondLevel.title}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import {uniGrid, uniGridItem} from '@dcloudio/uni-ui';
  import iconLuyouqi from "@/static/tool/luyouqi.png";
  import iconForbidden from "@/static/tool/forbidden.png";
  import iconSetting from "@/static/tool/setting.png";
	export default {
		components: {
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				items: [
					{
						title: '快捷工具',
						items: [
							{
								title: '重启路由器',
								icon: iconLuyouqi
							},
							{
								title: '关闭',
								icon: iconForbidden
							},
							{
								title: '重启路由器',
								icon: iconLuyouqi
							},
							{
								title: '关闭',
								icon: iconForbidden
							}
						]
					},
					{
						title: '系统工具',
						items: [
							{
								title: '重启路由器',
								icon: iconSetting
							},
							{
								title: '关闭',
								icon: iconForbidden
							}
						]
					},
					{
						title: '辅助工具',
						items: [
							{
								title: '关闭',
								icon: iconForbidden
							}
						]
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		padding-bottom: 30rpx;
		box-sizing: border-box;
		.section-list {
			overflow: hidden;
			.section-title {
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				font-size: 14px;
				color: $uni-text-color-grey;
				padding-left: 30rpx;;
			}
			.section-content {
				.uni-grid-item {
					background-color: white;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					overflow: hidden;
					.item-content {
						margin: auto 0;
						.item-icon {
							width: 80rpx;
							margin: 0 auto;
							display: flex;
						}
						.text {
							display: flex;
							justify-content: center;
							font-size: 14px;
							padding-top: 10rpx;
						}
					}
				}
			}
		}
	}
</style>

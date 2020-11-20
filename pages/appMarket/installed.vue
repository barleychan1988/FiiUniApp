<template>
	<uni-list>
		<uni-list-item
			v-for="item in items"
			:key="item.id"
			:title="item.name"
			:note="item.description"
			:thumb="item.icon"
			link
			:to="`/pages/appMarket/app.detail?id=${item.id}`"
		>
		</uni-list-item>
	</uni-list>
</template>

<script>
	import {uniList, uniListItem} from '@dcloudio/uni-ui';
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				items: [
					{
						id: 1,
						name: '手机远程管理',
						icon: '/static/appmall/APP.png',
						description: '此插件配合手机APP使用，可以全面管理。此插件配合手机APP使用，可以全面管理。此插件配合手机APP使用，可以全面管理。此插件配合手机APP使用，可以全面管理。'
					},
					{
						id: 2,
						name: '手机远程管理',
						icon: '/static/appmall/app2.png',
						description: '此插件配合手机APP使用，可以全面管理。'
					},
					{
						id: 8,
						name: '手机远程管理',
						icon: '/static/appmall/APP.png',
						description: '此插件配合手机APP使用，可以全面管理。'
					},
					{
						id: 5,
						name: '手机远程管理',
						icon: '/static/appmall/app2.png',
						description: '此插件配合手机APP使用，可以全面管理。此插件配合手机APP使用，可以全面管理。此插件配合手机APP使用，可以全面管理。此插件配合手机APP使用，可以全面管理。'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
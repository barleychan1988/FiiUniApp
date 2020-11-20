<template>
	<uni-list>
		<uni-list-item v-for="item in items" :key="item.id" :title="item.name" :note="item.description" :thumb="item.icon">
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
						name: '华春莹发推讽刺美国政府',
						icon: '/static/appmall/APP.png',
						description: '美国航司每周赴华航班又增2班，但美国政府还在抱怨“不满意”。对此，华春莹发推讽刺美国政府“双标”，表示病例破千万'
					},
					{
						id: 2,
						name: '特朗普政府',
						icon: '/static/appmall/app2.png',
						description: '11月12日,特朗普政府突然宣布一项行政命令,禁止美国投资者对中国军方拥有或控制的企业进行投资,命令将于明年1月11日生效。'
					},
					// {
					// 	id: 3,
					// 	name: '手机远程管理',
					// 	icon: '/static/appmall/APP.png',
					// 	description: '此插件配合手机APP使用，可以全面管理。此插件配合手机APP使用，可以全面管理。此插件配合手机APP使用，可以全面管理。此插件配合手机APP使用，可以全面管理。'
					// },
					// {
					// 	id: 4,
					// 	name: '手机远程管理',
					// 	icon: '/static/appmall/APP.png',
					// 	description: '此插件配合手机APP使用，可以全面管理。'
					// },
					// {
					// 	id: 6,
					// 	name: '手机远程管理',
					// 	icon: '/static/appmall/APP.png',
					// 	description: '此插件配合手机APP使用，可以全面管理。'
					// },
					// {
					// 	id: 7,
					// 	name: '手机远程管理',
					// 	icon: '/static/appmall/APP.png',
					// 	description: '此插件配合手机APP使用，可以全面管理。'
					// },
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
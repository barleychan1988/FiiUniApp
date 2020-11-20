<script>
	import UserInfo from "@/data/user.info";
	import Utils from "@/util/index";
	export default {
		onLaunch: function() {
			this.globalData.userInfo = UserInfo;
			this.globalData.utils = Utils;
		},
		// onShow: function() {
		// },
		// onHide: function() {
		// }
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	body {
		background-color: #f2f1f6;
		overflow-x: hidden;
		.content {
			overflow-x: hidden;
		}
		.page {
			overflow-x: hidden;
		}
	}
</style>

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

<style>
	/*每个页面公共css */
	body {
		background-color: #f2f1f6;
	}
</style>

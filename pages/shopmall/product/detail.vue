<template>
  <view class='content'>
		<swiper class="banner" circular indicator-dots :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item, index) in banner" :key="index + ''">
				<image :src="item.image" mode="heightFix" class="banner-image" />
			</swiper-item>
		</swiper>    
  </view>
</template>
<script>
  export default {
    data() {
      return {
				banner: [
					{
						id: 1,
						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606211542374&di=1d51aaf7e478a54289e7f7a1d8bbfbe0&imgtype=0&src=http%3A%2F%2Fimages.ofweek.com%2FUpload%2FNews%2F2019-04%2F02%2Frenxiaojun%2F1554211883978090777.jpg'
					},
					{
						id: 2,
						image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2374756720,3905482221&fm=26&gp=0.jpg'
					},
					{
						id: 3,
						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606211570679&di=c490a2af091edb94a0b4c04ca80812bd&imgtype=0&src=http%3A%2F%2Fwww.5thcn.com%2Fwp-content%2Fuploads%2F2019%2F07%2F5g-use-cases.jpg'
					}
				],
				autoplay: true,
				interval: 2000,
				duration: 500,
        
      }
    },
    methods: {
      
    }
  }
</script>
<style lang='scss' scoped>
  .content {
    overflow-x: hidden;
  }
</style>
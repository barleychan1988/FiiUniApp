<template>
	<view class="content">
    {{JSON.stringify(siriusFlyInfo)}}
  </view>
</template>


<script>
  import api from '@/service/api';
	export default {
    data() {
      return {
        siriusFlyInfo: {}
      };
    },
    onLoad(options) {
      console.log(options);
      this.getDetail(options.id)
    },
    methods: {
      getDetail(id) {
        this.request({
          url: `${this.api.SiriusFly.DETAIL}?sn=${id}`
        })
        .then(res => {
          this.siriusFlyInfo = res;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
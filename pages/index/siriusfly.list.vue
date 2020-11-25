<template>
	<view class="items_wrapper">
    <navigator class="item" v-for="(item, index) in data.list" :key="index" :url="`/pages/siriusfly/detail?id=${item.SN}`">
      <image :src="item.url || defaultIcon" mode="heightFix" class="icon"/>
      <view class="item_content">
        <text class="name">{{item.SN}}</text>
        <text class="desc">{{item.selected ? '已经选中' : item.DeviceType}}</text>
      </view>
    </navigator>
	</view>
</template>

<script>
  import {uniNavBar, uniIcons, uniList} from '@dcloudio/uni-ui';
  import HeNBIcon from "static/device/icon_siriusFly.png";

	export default {
		components: {
			uniNavBar,
			uniIcons,
			uniList
		},
		data() {
			return {
        defaultIcon: HeNBIcon,
        data: {
          list: []
        },
        params: {
          url: this.api.SiriusFly.LIST,
          method: 'GET'
        }
			}
		},
		mounted() {
      this.getList();
		},
		methods: {
			itemClicked(item, index) {
        console.log(item, index);
        // item.selected = !item.selected;
        // const items = [...this.items];
        // items[index] = item;
        // this.items = items;
        // uni.navigateTo({url: '/pages/tools/index'});
			},
			handleClickMore() {
				console.log('handleClickMore');
      },
      refreshList() {
        this.getList(1);
      },
      getList(current = 1) {
        this.request({...this.params, current})
        .then(res => {
          if (current == 1) {
            this.data = res;
            this.$emit('refreshEnd');
          } else {
            this.data.list = [...this.data.list, ...res.list];
          }
          if (this.data.list.length < res.pagination.count) {

          }
        }, error => {});
      }
		}
	}
</script>

<style lang="scss" scoped>
  .item {
    height: 162rpx;
    border-bottom-color: $uni-border-separator;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    display: flex;
    background-color: white;
    .icon {
      width: auto;
      height: 50%;
      margin: auto 0 auto 30rpx;
      vertical-align: middle;
    }
    .item_content {
      vertical-align: middle;
      margin: auto 0 auto 30rpx;
      .desc {
        color: $uni-text-color-grey;
        font-size: $uni-font-size-sm;
      }
      .name {
        color: $uni-text-color;
        font-size: $uni-font-size-lg;
        display: block;
      }
    }
  }
</style>

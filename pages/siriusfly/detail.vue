<template>
	<view class="content">
		<view class="header-wrapper">
      <image class="icon" mode="widthFix" :src="deviceIcon" />
      <view class="content-wrapper">
        <view class="item online-date">
          <text class="value">15:34</text>
          <view class="btn">
            <image class="btn-icon" mode="widthFix" src="/static/device/speed.png" />
            <text class="title">下线</text>
          </view>
        </view>
        <view class="separator-line-v" />
        <view class="item status">
          <text class="value">在线</text>
          <view class="btn">
            <image class="btn-icon" mode="widthFix" src="/static/device/speed.png" />
            <text class="title">下线</text>
          </view>
        </view>
      </view>
		</view>
    <view class="list">
      <view class="section" v-for="(itemSection, indexSection) in tableItems" :key="indexSection + 'section'">
        <view class="item" v-for="(item, index) in itemSection" :key="index + 'row'">
          <image class="icon" mode="heightFix" :src="item.icon" />
          <view class="item-content-wrapper">
            <text class="title">{{item.title}}</text>
            <view class="separator-line" v-if="index + 1 < itemSection.length"/>            
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import api from '@/service/api';
  import {uniIcons} from '@dcloudio/uni-ui';
  
  import iconSpeed from "static/device/speed.png";
  import iconSiriusFly from "static/device/icon_siriusFly.png";

	export default {
		components: {
			uniIcons
		},
    data() {
      return {
        deviceIcon: iconSiriusFly,
        siriusFlyInfo: {},
        tableItems: [
          [
            {
              icon: iconSpeed,
              title: '当前速度'
            },
            {
              icon: iconSpeed,
              title: '智能限速'
            }
          ],
          [
            {
              icon: iconSpeed,
              title: '上线提醒'
            }
          ],
          [
            {
              icon: iconSpeed,
              title: '允许联网'
            },
            {
              icon: iconSpeed,
              title: '家长控制'
            }
          ],
          [
            {
              icon: iconSpeed,
              title: '连接报告'
            },
            {
              icon: iconSpeed,
              title: '设备信息'
            }
          ]
        ]
      };
    },
    onLoad(options) {
      this.getDetail(options.id)
    },
    methods: {
      getDetail(id) {
        this.request({
          url: `${this.api.SiriusFly.DETAIL}?sn=${id}`
        })
        .then(res => {
          uni.setNavigationBarTitle({
            title: res.SN
          });
          this.siriusFlyInfo = res;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    overflow-x: hidden;
		.header-wrapper {
      height: 300rpx;
      background-color: $uni-color-primary;
      display: flex;
      padding-left: 100rpx;
      .icon {
        width: 80rpx;
        margin: auto 0;
      }
      .content-wrapper {
        flex: 1;
        display: flex;
        .separator-line-v {
          width: 1px;
          height: 60rpx;
          margin: auto 0;
          background-color: $uni-border-separator;
        }
        .item {
          flex: 1;
          height: fit-content;
          margin: auto 0;
          text-align: center;
          color: white;
          .value {
            font-size: $uni-font-size-lg;
          }
          .btn {
            .btn-icon {
              width: 20rpx;
              margin: auto 0;
            }
            .title {
              font-size: $uni-font-size-sm;
              margin-left: 10rpx;
            }
          }
        }
      }
    }
    .list {
      .section {
        margin-bottom: 20rpx;
        border-top: solid 1px $uni-border-separator;
        border-bottom: solid 1px $uni-border-separator;
        .item {
          height: 88rpx;
          line-height: 88rpx;
          background-color: white;
          display: flex;
          color: $uni-text-color;
          font-size: $uni-font-size-base;
          .icon {
            height: 44rpx;
            margin: auto 30rpx;
          }
          display: flex;
          .item-content-wrapper {
            position: relative;
            flex: 1;
            .separator-line {
              position: absolute;
              bottom: 0;
              background-color: $uni-border-separator;
              width: 100%;
              height: 1px;
            }
          }
        }
      }
    }
  }
</style>
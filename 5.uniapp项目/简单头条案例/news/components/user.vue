<template>
	<view class="user">
		 <view class="title">{{data.user}}</view>
		  <view class="content">{{data.content}}</view>
		   <view class="time">{{data.time}}</view>
	</view>
</template>

<script>
	export default {
		name:"user",
		props:['data'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.user{
	display: flex;
	flex-direction: column;
	border-bottom: 2rpx solid #ccc;
	 padding: 20rpx 10rpx;
	 .title{
		 font-size: 50rpx;
	 }
	 .content{
		 line-height: 60rpx;
	 }
	 .time{
		 opacity: 0.5;
	 }
}
</style>
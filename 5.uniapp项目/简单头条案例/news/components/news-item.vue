<template>
	<navigator :url="'/pages/detail/detail?id='+data.id" open-type="navigate">
	<view class="newsItem">
 
		<!-- 图 -->
		<image :src="`https://api.aichuangleyu.com/${data.img}`" ></image>
		<!-- 文字 -->
		<view class="content">
			<!-- 标题 -->
			<view class="title">{{data.title}}</view>
			<!-- 状态 -->
			<view class="status">
				<text>{{data.content}}</text>
				<text class="comment">评论：{{data.comment}}</text>
			</view>
		</view>
		
		
	</view>
	</navigator>
</template>

<script>
	export default {
		name:"news-item",
		// 收数据
		props:['data'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.newsItem{
	display: flex;
	border: 2rpx solid #ccc;
	padding:20rpx 20rpx;
	 image{
		 width:150rpx;
		 height: 120rpx;
		 margin-right: 20rpx;
	 }
	 .content{
		 flex:1;
		 .title{
			 font-size: 30rpx;
		 }
		 .comment{
			float: right;
		 }
	 }
}
</style>
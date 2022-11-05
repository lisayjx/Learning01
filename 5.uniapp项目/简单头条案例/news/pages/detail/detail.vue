<template>
	<view class="detail">
		<!-- 标题 -->
		<view class="title">{{ data.title }}</view>
		<!-- 时间和评论 -->
		<view class="status">
			<text class="time">{{ data.time }}</text>
			<text class="comment">评论: {{ data.comment }}</text>
		</view>
		<!-- 图片 -->
		<image class="img" :src="'https://api.aichuangleyu.com/' + data.img"  ></image>
		<!-- 内容 -->
		<view class="content" v-html="data.content"></view>
		<!-- 按钮 -->
		<button type="primary" @click="showDiscussPage">查看更多评论</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			data: {}
		};
	},
	// 页面加载完毕
	async onLoad(options) {
		// console.log(options);
		// 发送请求
		let [err, data] = await uni.request({
			url: 'https://api.aichuangleyu.com/app_news/data/detail?id=' + options.id
		});
		console.log(data.data);
		this.data = data.data;

		// 设置标题
		uni.setNavigationBarTitle({
			title: data.data.title
		});
	},
	methods: {
		// 点击跳转到discuss页
		showDiscussPage(){
			uni.navigateTo({
				url:`/pages/discuss/discuss?id=${this.data.id}&title=${this.data.title}`
			})
		}
	}
};
</script>

<style lang="scss" scoped>
	.detail{
		.title{
			 text-align: center;
			 padding: 40rpx 0;
		}
		.status{
			display: flex;
			justify-content:space-between;
			font-size: 30rpx;
		}
		.img{
			width: 100%;
		}
		.content {
				padding: 20rpx;
				text-indent: 2em;
				line-height: 48rpx;
			}
	}
	
</style>

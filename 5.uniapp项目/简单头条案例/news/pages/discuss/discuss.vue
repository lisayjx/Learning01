<template>
	<view class="discuss">
		<!-- 留言框 -->
		<view class="inp"><textarea placeholder="文明上网,理性发言" v-model="msg"></textarea></view>
		<!-- 按钮 -->
		<view class="btn"><button @click="submit">提交</button></view>

		<!-- 组件user，可移动的视图区域 -->
		<scroll-view :scroll-y="true" :scroll-x="false" :style="'height:'+height + 'px'">
			<!-- 组件user -->
			<user v-for="item in list" :key="item.id" :data="item"></user>
		</scroll-view>
	</view>
</template>

<script>
import user from '../../components/user.vue';
export default {
	components: { user },
	data() {
		return {
			msg: '',
			list: [],
			height: uni.getSystemInfoSync().windowHeight - 200
		};
	},
	methods: {
		// 点击提交
		async submit() {
			// 如果输入的是空白
			if (this.msg.trim() === '') {
				// 模态框
				uni.showModal({
					title: '温馨提示',
					content: '不能为空',
					showCancel: false //没有取消按钮
				});
				return;
			}

			// 如果不为空
			// 定义当前日期
			let date = new Date();
			// 定级数据字段。
			let sendData = {
				user: 'lisa',
				content: this.msg,
				time: `刚刚:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
			};
			// 发送post请求
			let [err, data] = await uni.request({
				url: 'https://api.aichuangleyu.com/app_news/data/addComment',
				method: 'POST',
				data: sendData
			});
			// 判断数据是否成功获取
			if (data.data.errno === 0) {
				// 数据驱动视图
				this.list.unshift(sendData);
				// 清空输入内容
				this.msg = '';
			}
		}
	},
	async onLoad(options) {
		// 接收query数据，detail传过来的
		// console.log(options);//{"id":"2","title":"英超-曼联3-2枪手 妖星造3球"}
		// 设标题
		uni.setNavigationBarTitle({
			title: options.title
		});
		//发送请求
		let [err, data] = await uni.request({
			url: 'https://api.aichuangleyu.com/app_news/data/comment?comment=' + options.id
		});
		// console.log(111,data);
		this.list = data.data.list;
	}
};
</script>

<style lang="scss" scoped>
.discuss {
	.inp {
		padding: 30rpx 60rpx;
		textarea {
			border: 4rpx solid #ccc;
			box-sizing: border-box;
			padding: 20rpx;
		}
	}
	.btns {
		display: flex;
		button {
			margin-right: 36rpx;
			font-size: 24rpx;
		}
	}
}
</style>

<template>
	<view class="home">
		<!-- 定义可移动的视图区域 横向 -->
		<scroll-view class="types" :scroll-y="false" :scroll-x="true" :scroll-into-view="'nav' + navId">
			<view class="nav-container">
				<view class="item" :class="navId === item.id ? 'choose' : ''" v-for="item in types" :key="item.id" @tap="navId = item.id" :id="'nav' + item.id">
					{{ item.text }}
				</view>
			</view>
		</scroll-view>

		<!-- 轮播图 -->
		<swiper :duration="500" :style="'height:'+height + 'px'" :current="pageId" @change="changePage">
			<swiper-item v-for="item in types" :key="item.id">
				<!-- <view>{{item.text}}</view> -->

				<!-- 可移动视图 -->
				<!-- @scrolltolower捕获触底的方法 
				     :refresher-enabled：true开启下拉刷新 
					 :refresher-triggered：false 定义下拉刷新开启和关闭
					 @refresherrefresh捕获下拉动作
				-->
				<scroll-view
					:scroll-y="true"
					:scroll-x="false"
					:style="'height:'+height + 'px'"
					@scrolltolower="loadMore"
				 :refresher-enabled="true"
					:refresher-triggered="item.refresh"
					@refresherrefresh="pullDown(item)"
				>
					<!-- 每一个 一样的小组件 -->
					<news-item v-for="(item, index) in list[item.id]" :key="index" :data="item"></news-item>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import newsItem from '../../components/news-item.vue';
export default {
	components: { newsItem },
	data() {
		return {
			// 标识
			navId: 1,
			types: [
				{ id: 1, text: '关注' },
				{ id: 2, text: '推荐' },
				{ id: 3, text: '热点' },
				{ id: 4, text: '国际' },
				{ id: 5, text: '历史' },
				{ id: 6, text: '娱乐' },
				{ id: 7, text: '科技' },
				{ id: 8, text: '动物' },
				{ id: 9, text: '视频' },
				{ id: 10, text: '图片' },
				{ id: 11, text: '搞笑' }
			],
			list: {},
			// 获取系统页面高度-导航高度 =下面的高度
			height: uni.getSystemInfoSync().windowHeight - 60
		};
	},
	// 计算属性
	computed: {
		pageId() {
			// 找到types数据中符合 每一项id===navId的 项目的索引值
			return this.types.findIndex(item => item.id === this.navId);
		}
	},
	onLoad() {
		this.getData();
	},
	// 监听数据
	watch: {
		navId() {
			// 判断是否有数据
			if (!this.list[this.navId]) {
				this.getData();
			}
		}
	},
	methods: {
		async getData() {
			// console.log(11);
			let [err, data] = await uni.request({
				url: 'https://api.aichuangleyu.com/app_news/data/list'
			});
			// console.log(data.data);
			// 把请求回来的数据存到data中的list中,存储分类数据
			// this.list=data.data
			// this.list[this.navId] = data.data;
			//为了避免数据丢失，用vue语法.给list对象添加navid属性里的数据。
			if (this.list[this.navId]) {
				//判断一下数据分类是否已经存在
				// 往里存储数据
				this.list[this.navId].push(...data.data);
			} else {
				this.$set(this.list, this.navId, data.data);
			}
		},
		// 滑动轮播图改变navId，也就是改变上面的导航
		changePage(e) {
			// console.log(e);
			this.navId = this.types[e.detail.current].id;
		},
		// 触底加载更多
		loadMore() {
			this.getData();
		},
		// 下拉刷新
		async pullDown(item) {
			// 1.开关,如果是开启状态就不允许下拉
			if (item.refresh) return;
			// 2.开启状态   为item设置refresh属性
			this.$set(item, 'refresh', true);
			// 3.先清空之前的数据
			this.list[this.navId]=[]
			// 4.请求数据
			await this.getData();
			// 5.请求完就后关闭
			this.$set(item, 'refresh', false);
		}
	}
};
</script>

<style lang="scss" scoped>
.home {
	// 去掉默认滚动条
	::-webkit-scrollbar {
		display: none;
	}
	.types {
		border-bottom: 1rpx solid #ccc;
		
	}
	.nav-container {
		height: 80rpx;
		line-height: 80rpx;
		display: flex;

		.item {
			padding: 0rpx 40rpx;
			flex: none;
		}
		.item.choose {
			border-bottom: 4rpx solid #fca60b;
		}
	}
}
</style>

// pages/myPublish/myPublish.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tabList: ['找主人', '寻物品'],
		listImage: [
			{
				name: 'AI动画',
				price: '1w+/部',
				title: '反邪教创意公益广告',
				url: '/images/water_pic/000ac34008b0ba4c.jpg',
				avatar: '/images/water_pic/000ac34008b0ba4c.jpg',
			},
			{
				name: '宣传片',
				price: '5w+/部',
				title: '以数字化护航清远农业发展',
				url: '/images/water_pic/000b42cae15622e0.jpg',
				avatar: '/images/water_pic/000b42cae15622e0.jpg',
			},
			{
				name: '科普类',
				price: '5w+/部',
				title: '在清远有多少健身房计划圈钱跑路？',
				url: '/images/water_pic/000ac95750ac7399.jpg',
				avatar: '/images/water_pic/000ac95750ac7399.jpg',
			},
			{
				name: '比赛PPT',
				price: '200/页',
				title: '大数据赋能检察办案提升法律监督质效',
				url: '/images/water_pic/000acf666d991c39.jpg',
				avatar: '/images/water_pic/000acf666d991c39.jpg',
			},
			{
				name: '访谈',
				price: '3w+/部',
				title: '面对面访谈-如何快速实现清远农产品数字化',
				url: '/images/water_pic/000ad20b5e452b24.jpg',
				avatar: '/images/water_pic/000ad20b5e452b24.jpg',
			},
			{
				name: '解说类',
				price: '1k/h',
				title: '清城区VS清新区篮球赛',
				url: '/images/water_pic/000ad3d42653f5f6.jpg',
				avatar: '/images/water_pic/000ad3d42653f5f6.jpg',
			},
			{
				name: '场景建模类',
				price: '10w/部',
				title: '某某石化加工厂模型工作原理',
				url: '/images/water_pic/000ad6c520be9ec5.jpg',
				avatar: '/images/water_pic/000ad6c520be9ec5.jpg',
			},
			{
				name: '校园拍摄/街拍/婚拍',
				price: '3千/天',
				title: '情侣/闺蜜/对象写真艺术照',
				url: '/images/water_pic/000ad6fa67b5ad96.jpg',
				avatar: '/images/water_pic/000ad6fa67b5ad96.jpg',
			},
		]
	},

	changeTab(value) {
		console.log(value.detail);
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tabList: ['找主人', '寻物品'],
		listImage: [
			{
				name: 'AI动画',
				price: '2024-01-08',
				title: '灯塔',
				url: '/images/water_pic/000ac34008b0ba4c.jpg',
				avatar: '/images/water_pic/000ac34008b0ba4c.jpg',
			},
			{
				name: '宣传片',
				price: '2024-01-08',
				title: '捡到一个城堡',
				url: '/images/water_pic/000b42cae15622e0.jpg',
				avatar: '/images/water_pic/000b42cae15622e0.jpg',
			},
			{
				name: '123',
				price: '2024-01-08',
				title: '丢失两只狗狗',
				url: '/images/water_pic/000acf666d991c39.jpg',
				avatar: '/images/water_pic/000acf666d991c39.jpg',
			},
			{
				name: '访谈',
				price: '2024-01-08',
				title: '捡到手机两部',
				url: '/images/water_pic/000ad20b5e452b24.jpg',
				avatar: '/images/water_pic/000ad20b5e452b24.jpg',
			},
			{
				name: '场景建模类',
				price: '2024-01-08',
				title: '某某石化加工厂模型',
				url: '/images/water_pic/000ad6c520be9ec5.jpg',
				avatar: '/images/water_pic/000ad6c520be9ec5.jpg',
			},
			{
				name: '校园拍摄',
				price: '2024-01-08',
				title: '情侣/闺蜜/对象写真艺术照',
				url: '/images/water_pic/000ad6fa67b5ad96.jpg',
				avatar: '/images/water_pic/000ad6fa67b5ad96.jpg',
			},
		]
	},

	changeTab(value) {
		console.log(value.detail);
	},

	toDetail(e) {
		console.log(e);
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {
		if (typeof this.getTabBar === 'function' && this.getTabBar()) {
			this.getTabBar().setData({
				select: 0
			})
		}
		this.onLoad();
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})
import {
	getLose
} from "../../api/lose";

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tabList: ['找主人', '寻物品'],
		listImage: [],
		tabSelect: 0
	},

	async getLoseList(type) {
		const loseData = await getLose(type);
		let loseDataList = [];
		// 重构返回值
		loseData.data.forEach(element => {
			console.log(element);
			let loseDataItem = {
				id: `${element["_id"]}`,
				name: `${element["classify2"]}`,
				price: `${element["date"].split(' ')[0]}`,
				title: `${element["name"]}`,
				url: `${element["imgList"][0]}`,
				avatar: `${element["imgList"][0]}`,
				phone: `${element["phone"]}`,
				openid: `${element["openid"]}`,
				desc: `${element["desc"]}`,
				date: `${element["date"]}`,
				region: `${element["region"]}`,
				state: `${element["state"]}`
			};
			loseDataList.push(loseDataItem);
		});
		this.setData({
			listImage: loseDataList
		});
	},

	changeTab(value) {
		this.getLoseList(value.detail.value);
		this.setData({
			tabSelect: value.detail.value
		});
	},

	toDetail(e) {
		console.log(e);
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getLoseList(this.data.tabSelect);
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
import {
	getMyPublish
} from "../../api/lose";


const openId = wx.getStorageSync("openId");

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tabList: ['找主人', '寻物品'],
		listImage: [],
		tabSelect: 0
	},

	async getMyPublishDataList(type) {
		const publishData = await getMyPublish(openId, type);
		let publishDataList = [];
		// 重构返回值
		publishData.data.forEach(element => {
			let loseDataItem = {
				username: `${element["username"]}`,
				userAvatar: `${element["userAvatar"]}`,
				id: `${element["_id"]}`,
				type: `${element["classify1"]}-${element["classify2"]}`,
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
			publishDataList.push(loseDataItem);
		});
		this.setData({
			listImage: publishDataList
		});
	},

	changeTab(value) {
		this.getMyPublishDataList(value.detail.value);
		this.setData({
			tabSelect: value.detail.value
		});
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		this.getMyPublishDataList(this.data.tabSelect);
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
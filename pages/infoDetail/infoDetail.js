import Message from 'tdesign-miniprogram/message/index';
import {
	collectItem, cancelCollection, checkCollection
} from "../../api/lose";

const openId = wx.getStorageSync("openId");

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		login: false,
		dataArr: {},
		collected: false
	},

	// 点击联系我事件
	onContactTap() {
		if (!this.data.login) {
			wx.navigateTo({
				url: "../login/login"
			});

			return;
		};


		wx.setClipboardData({
			data: this.data.dataArr.phone.toString()
		});
	},

	// 收藏功能
	onCollectionTap() {
		if (!this.data.login) {
			wx.navigateTo({
				url: "../login/login"
			});

			return;
		};

		if (!this.data.collected) {
			collectItem(this.data.dataArr.id, openId);
		} else {
			cancelCollection(this.data.dataArr.id, openId);
		}
		this.setData({
			collected: !this.data.collected
		});
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	async onLoad(options) {
		const login = wx.getStorageSync("login");
		this.setData({
			login: !!login
		});

		let opt = JSON.parse(options.data);
		const res = await checkCollection(opt.id, openId);
		if (res.data.length !== 0) {
			this.setData({
				collected: true
			});
		};
		this.setData({
			dataArr: opt
		});
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
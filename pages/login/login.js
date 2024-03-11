import { login } from "../../api/user";
import Message from 'tdesign-miniprogram/message/index';

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		userName: "",
		password: "",
		submited: false
	},

	// 数据绑定
	getUserName(e) {
		this.setData({
			userName: e.detail.value
		});
	},

	getPassword(e) {
		this.setData({
			password: e.detail.value
		});
	},

	// 登录方法
	async handLogin() {
		const { userName, password, submited } = this.data;

		if (submited) {
			return ;
		}
		
		this.setData({
			submited: true
		});

		console.log(userName, password);
		if (!userName || !password) {
			Message.warning({
				context: this,
				offset: [20, 32],
				duration: 5000,
				content: '请注意消息是否填充完整!',
			});

			this.setData({
				submited: false
			});
			0
			return;
		};

		const data = {
			"username": userName,
			"password": password
		};
		const res = await login(data);

		if (res.data.hasOwnProperty("openid")) {
			const userInfo = {
				"avatarUrl": res.data.avatar,
				"nickName": res.data.nickname
			};
			console.log(userInfo);
			wx.setStorageSync("userInfo", userInfo);
			wx.setStorageSync('openId', res.data.openid);
			wx.setStorageSync("login", true);

			wx.reLaunch({
				url: '../index/index'
			});
		}
		else if (res.data === "error") {
			Message.warning({
				context: this,
				offset: [20, 32],
				duration: 5000,
				content: '账号信息不存在, 请重试!',
			});
		}
		else if (res.data === "pwdError") {
			Message.warning({
				context: this,
				offset: [20, 32],
				duration: 5000,
				content: '密码错误, 请重试!',
			});
		}

		this.setData({
			submited: false
		});
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
	onShow: function () {

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
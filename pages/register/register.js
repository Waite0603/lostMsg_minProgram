import { register } from "../../api/user";
import Message from 'tdesign-miniprogram/message/index';

const defaultAvatarUrl = "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0";


Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		avatarUrl: defaultAvatarUrl,
		nickName: "",
		userName: "",
		password: "",
		password2: ""
	},

	onChooseAvatar(e) {
		const { avatarUrl } = e.detail;
		this.setData({
			avatarUrl,
		});

		console.log(avatarUrl);
	},

	// 数据绑定
	getNickName(e) {
		this.setData({
			nickName: e.detail.value
		});
	},

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

	getPassword2(e) {
		this.setData({
			password2: e.detail.value
		});
	},


	async handRegister() {
		const { avatarUrl, nickName, userName, password, password2 } = this.data;
		if (!avatarUrl || !nickName || !userName || !password || !password2) {
			Message.warning({
				context: this,
				offset: [20, 32],
				duration: 5000,
				content: '请注意消息是否填充完整!',
			});

			return;
		}

		if (password !== password2) {
			Message.warning({
				context: this,
				offset: [20, 32],
				duration: 5000,
				content: '两次密码不相同!',
			});

			return;
		};


		const data = {
			"avatar": avatarUrl,
			"nickname": nickName,
			"username": userName,
			"password": password
		}

		const res = await register(data);
		console.log(res);
		
		if (res.data.hasOwnProperty("openid")) {
			const userInfo = {
				avatarUrl,
				nickName
			};
			wx.setStorageSync("userInfo", userInfo);
			wx.setStorageSync('openId', res.data.openid);
			wx.setStorageSync("login", true);

			wx.reLaunch({
				url: '../index/index'
			})
		}
		else if (res.data === "Registered") {
			Message.warning({
				context: this,
				offset: [20, 32],
				duration: 5000,
				content: '账号已存在, 请输入其他的账号!',
			});
		}
		else {
			Message.error({
				context: this,
				offset: [20, 32],
				duration: 5000,
				content: '未知错误, 请重试!',
			});
		}
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
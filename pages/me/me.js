// pages/me/me.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		login: false,
		userInfo: {
			avatarUrl: "",
			nickName: ""
		},
		cellList: [
			{
				url: "../../images/publish.png",
				text: "我的发布",
				src: "../myPublish/myPublish"
			},
			{
				url: "../../images/collection1.png",
				text: "我的收藏",
				src: "../collection/collection"
			},
			{
				url: "../../images/info.png",
				text: "我的信息",
				src: "../myInfo/myInfo"
			},
			{
				url: "../../images/quit.png",
				text: "退出登录"
			}
		]
	},

	// 调用登录接口
	getUserProfile(e) {
		// 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
		// 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
		wx.getUserProfile({
			desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
			success: (res) => {
				console.log(res);
				const { userInfo: { avatarUrl, nickName } } = res;
				const userInfo = {
					avatarUrl,
					nickName
				};
				wx.setStorageSync("userInfo", userInfo);
				wx.setStorageSync("login", true);
				this.setData({
					login: true
				});
			}
		})
	},

	toCell(e) {
		const { page } = e.currentTarget.dataset;
		if (page === "../collection/collection") {
			wx.switchTab({
				url: page
			})
		}
		else {
			wx.navigateTo({
				url: page
			});
		}
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		const login = wx.getStorageSync("login");
		const userInfo = wx.getStorageSync("userInfo");
		if (userInfo) {
			this.setData({
				userInfo: userInfo
			});
		};
		// 无论什么类型, !! 返回一定是 Boolean 类型
		this.setData({
			login: !!login
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
		if (typeof this.getTabBar === "function" && this.getTabBar()) {
			this.getTabBar().setData({
				select: 4
			})
		}
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
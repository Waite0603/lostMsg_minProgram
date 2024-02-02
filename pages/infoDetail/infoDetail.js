import Message from 'tdesign-miniprogram/message/index';

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		dataArr: {},
		collected: false
	},

	// 点击联系我事件
	onContactTap() {
		wx.setClipboardData({
			data: this.data.dataArr.title.toString(),
			success(res) {
				// 禁用系统默认弹窗
				wx.hideToast();
				Message.success({
					context: this,
					offset: [20, 32],
					duration: 5000,
					content: '联系方式复制成功',
				});
			}
		})

	},

	// 收藏功能
	onCollectionTap() {
		this.setData({
			collected: !this.data.collected
		});
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		let opt = JSON.parse(options.data);
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
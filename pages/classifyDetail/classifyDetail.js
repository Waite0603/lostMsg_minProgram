import {
	getClassify
} from "../../api/lose";

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		dataArr: [],
		loading: 0
	},

	toDetail(e) {
		let data = e.currentTarget.dataset.msg;
		wx.navigateTo({
			url: '../../pages/infoDetail/infoDetail?data=' + JSON.stringify(data),
		})
	},

	backTo() {
		wx.navigateBack({
			delta: 1
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	async onLoad(options) {
		let classify = JSON.parse(options.classify);
		const classifyLost = await getClassify(0, classify);
		const classifySearch = await getClassify(1, classify);
		const classifyData = classifyLost.data.concat(classifySearch.data);

		// 根据 time 属性进行排序
		classifyData.sort((a, b) => {
			return a.time - b.time;
		});

		let classifyDataList = [];
		// 重构返回值
		classifyData.forEach(element => {
			let loseDataItem = {
				username: `${element["username"]}`,
				userAvatar: `${element["userAvatar"]}`,
				id: `${element["_id"]}`,
				classify: `${element["classify1"]}-${element["classify2"]}`,
				price: `${element["date"].split(' ')[0]}`,
				title: `${element["name"]}`,
				url: `${element["imgList"][0]}`,
				avatar: `${element["imgList"][0]}`,
				phone: `${element["phone"]}`,
				openid: `${element["openid"]}`,
				desc: `${element["desc"]}`,
				date: `${element["date"]}`,
				region: `${element["region"]}`,
				type: `${element["type"]}`,
				state: `${element["state"]}`
			};
			classifyDataList.push(loseDataItem);
		});
		if (classifyDataList.length === 0) {
			this.setData({
				loading: 2
			});
		}
		else {
			this.setData({
				dataArr: classifyDataList,
				loading: 1
			});
		}
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
// components/ViewCard/ViewCard.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		listImage: Array
	},



	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		toDetail(e) {
			let data = e.currentTarget.dataset.msg;
			wx.navigateTo({
				url: '../../pages/infoDetail/infoDetail?data=' + JSON.stringify(data),
			})
		}
	}
})
import Message from "tdesign-miniprogram/message/index";
import {
	publishSearchFrom
} from "../../api/publish";
import {
	baseUrl
} from "../../utils/requet";

const areaData = {
	areaList: [
		{
			label: "卡片、证件类",
			value: "卡片、证件类",
			children: [
				{ value: "身份证", label: "身份证" },
				{ value: "校园卡", label: "校园卡" },
				{ value: "学生证", label: "学生证" },
				{ value: "水卡", label: "水卡" },
				{ value: "公交卡", label: "公交卡" },
				{ value: "银行卡", label: "银行卡" },
				{ value: "其它", label: "其它" },
			],
		},
		{
			label: "生活用品",
			value: "生活用品",
			children: [
				{ value: "水杯", label: "水杯" },
				{ value: "雨伞", label: "雨伞" },
				{ value: "小风扇", label: "小风扇" },
				{ value: "钥匙/钥匙扣", label: "钥匙/钥匙扣" },
				{ value: "其它", label: "其它" },
			],
		},
		{
			label: "数码产品",
			value: "数码产品",
			children: [
				{ value: "手机", label: "手机" },
				{ value: "相机", label: "相机" },
				{ value: "U盘/硬盘", label: "U盘/硬盘" },
				{ value: "充电宝", label: "充电宝" },
				{ value: "平板电脑", label: "平板电脑" },
				{ value: "鼠标", label: "鼠标" },
				{ value: "充电线", label: "充电线" },
				{ value: "耳机", label: "耳机" },
				{ value: "手写笔", label: "手写笔" },
				{ value: "支架", label: "支架" },
				{ value: "音箱", label: "音箱" },
				{ value: "MP3", label: "MP3" },
				{ value: "其它", label: "其它" },
			],
		},
		{
			label: "美妆护肤类",
			value: "美妆护肤类",
			children: [
				{ value: "口红", label: "口红" },
				{ value: "粉底", label: "粉底" },
				{ value: "眉笔", label: "眉笔" },
				{ value: "腮红", label: "腮红" },
				{ value: "眼影", label: "眼影" },
				{ value: "防晒", label: "防晒" },
				{ value: "喷雾", label: "喷雾" },
				{ value: "香水", label: "香水" },
				{ value: "其它", label: "其它" },
			],
		},
		{
			label: "衣服物品类",
			value: "衣服物品类",
			children: [
				{ value: "男装", label: "男装" },
				{ value: "女装", label: "女装" },
				{ value: "男鞋", label: "男鞋" },
				{ value: "女鞋", label: "女鞋" },
				{ value: "包包", label: "包包" },
				{ value: "其它", label: "其它" },
			],
		},
		{
			label: "饰品",
			value: "饰品",
			children: [
				{ value: "手表", label: "手表" },
				{ value: "项链", label: "项链" },
				{ value: "手链", label: "手链" },
				{ value: "戒指", label: "戒指" },
				{ value: "耳饰", label: "耳饰" },
				{ value: "眼镜", label: "眼镜" },
				{ value: "帽子", label: "帽子" },
				{ value: "发饰", label: "发饰" },
				{ value: "其它", label: "其它" },
			],
		},
		{
			label: "文娱",
			value: "文娱",
			children: [
				{ value: "教材", label: "教材" },
				{ value: "笔记", label: "笔记" },
				{ value: "文具", label: "文具" },
				{ value: "球/球拍", label: "球/球拍" },
				{ value: "护具", label: "护具" },
				{ value: "跳绳", label: "跳绳" },
				{ value: "自行车", label: "自行车" },
				{ value: "棋牌", label: "棋牌" },
				{ value: "其它", label: "其它" },
			],
		},
		{
			label: "其它",
			value: "其它",
			children: [
				{ value: "药品", label: "药品" },
				{ value: "零食", label: "零食" },
				{ value: "周边", label: "周边" },
				{ value: "其它", label: "其它" },
			],
		}

	],
};


Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		options: areaData.areaList,
		visible: false,
		mode: "",
		datetimeVisible: false,
		datetime: new Date("2024-01-01").getTime(),
		note: "请选择物品",
		name: "",
		location: "",
		content: "",
		datetimeText: "请选择时间",
		desc: "",
		imgUrl: "",
		fileList: [],
		submiting: false
	},

	// 物品类别选择
	showCascader() {
		this.setData({ visible: true });
	},
	onChange(e) {
		const { selectedOptions } = e.detail;

		this.setData({
			note: selectedOptions.map((item) => item.label).join("/"),
		});
	},
	// 时间选择器
	showPicker(e) {
		const { mode } = e?.currentTarget?.dataset;
		this.setData({
			mode,
			[`${mode}Visible`]: true,
		});
	},
	hidePicker() {
		const { mode } = this.data;
		this.setData({
			[`${mode}Visible`]: false,
		});
	},
	onConfirm(e) {
		const { value } = e?.detail;
		const { mode } = this.data;

		this.setData({
			[mode]: value,
			[`${mode}Text`]: value,
		});

		this.hidePicker();
	},

	// 图片上传
	handleImgUpload(e) {
		const { fileList } = this.data;
		const { files } = e.detail;
		const { length } = fileList;
		this.setData({
			fileList: [...fileList, ...files], // 此时设置了 fileList 之后才会展示选择的图片
		});

		const task = wx.uploadFile({
			url: baseUrl + "/uploadImg",
			filePath: e.detail.files[0].url,
			name: "file",
			success: (res) => {
				const data = JSON.parse(res["data"]);
				const imgUrl = baseUrl + `/file/${data[0]["filename"]}`;
				this.setData({
					[`fileList[${length}].status`]: 'done',
					imgUrl: imgUrl
				});
			},
			fail: (error) => {

			}
		});

		// 显示长传进度

		task.onProgressUpdate((res) => {
			this.setData({
				[`fileList[${length}].percent`]: res.progress,
			});
		});
	},
	handleRemove(e) {
		const { index } = e.detail;
		const { fileList } = this.data;

		fileList.splice(index, 1);
		this.setData({
			fileList,
		});
	},

	// 获取数据
	getName(e) {
		this.setData({
			name: e.detail.value
		})
	},
	getLocation(e) {
		this.setData({
			location: e.detail.value
		})
	},
	getContent(e) {
		this.setData({
			content: e.detail.value
		})
	},
	getDesc(e) {
		this.setData({
			desc: e.detail.value
		})
	},


	// 提交表单
	onSubmit(e) {
		const { submiting, note, name, location, content, datetimeText, desc, imgUrl } = this.data;

		if (note === "请选择物品" || datetimeText === "请选择时间") {
			Message.error({
				context: this,
				offset: [20, 32],
				duration: 2000,
				content: "请检查内容是否填写完整"
			});

			return;
		};

		if (!name || !location || !content || !desc) {
			Message.error({
				context: this,
				offset: [20, 32],
				duration: 2000,
				content: "请检查内容是否填写完整"
			});

			return;
		};

		if (!imgUrl) {
			Message.error({
				context: this,
				offset: [20, 32],
				duration: 2000,
				content: "请检查图片是否上传"
			});

			return;
		}

		if (submiting) {
			Message.error({
				context: this,
				offset: [20, 32],
				duration: 2000,
				content: "请不要重复提交"
			});

			return ;
		};

		// 准备上传表单
		this.setData ({
			submiting: true
		});

		const regex = /([^\/]+)\/(.*)/;
		const multiArray = note.match(regex);
		const params = {
			openid: wx.getStorageSync('openId'),
			type: 1,
			classify1: multiArray[1],
			classify2: multiArray[2],
			name: name,
			date: datetimeText,
			region: location,
			phone: content,
			desc: desc,
			imgList: imgUrl,
			time: new Date().getTime()
		};

		publishSearchFrom(params).then(res => {
			if (res["data"] === "success") {
				wx.switchTab({
					url: '../index/index',
					success: () => {
						wx.showToast({
							icon: 'none',
							title: '发布成功!',
						})
					}
				})
			} else {
				wx.showToast({
					title: '修改失败!',
					icon: 'none'
				})
			}
		});
		this.setData ({
			submiting: false
		});
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
const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';

Page({
	offsetTopList: [],
	data: {
		sideBarIndex: 0,
		scrollTop: 0,
		categories: [
			{
				label: '卡片、证件类',
				title: '卡片、证件类',
				items: [
					{ value: "身份证", label: "身份证", image },
					{ value: "校园卡", label: "校园卡", image },
					{ value: "学生证", label: "学生证", image },
					{ value: "水卡", label: "水卡", image },
					{ value: "公交卡", label: "公交卡", image },
					{ value: "银行卡", label: "银行卡", image },
					{ value: "其它", label: "其它", image },
				]
			},
			{
				label: '生活用品',
				title: '生活用品',
				items: [
					{ value: "水杯", label: "水杯", image },
					{ value: "雨伞", label: "雨伞", image },
					{ value: "小风扇", label: "小风扇", image },
					{ value: "钥匙/钥匙扣", label: "钥匙/钥匙扣", image },
					{ value: "其它", label: "其它", image },
				]
			},
			{
				label: "数码产品",
				title: "数码产品",
				items: [
					{ value: "手机", label: "手机", image },
					{ value: "相机", label: "相机", image },
					{ value: "U盘/硬盘", label: "U盘/硬盘", image },
					{ value: "充电宝", label: "充电宝", image },
					{ value: "平板电脑", label: "平板电脑", image },
					{ value: "鼠标", label: "鼠标", image },
					{ value: "充电线", label: "充电线", image },
					{ value: "耳机", label: "耳机", image },
					{ value: "手写笔", label: "手写笔", image },
					{ value: "支架", label: "支架", image },
					{ value: "音箱", label: "音箱", image },
					{ value: "MP3", label: "MP3", image },
					{ value: "其它", label: "其它", image },
				]
			},
			{
				label: "美妆护肤类",
				title: "美妆护肤类",
				items: [
					{ value: "口红", label: "口红", image },
					{ value: "粉底", label: "粉底", image },
					{ value: "眉笔", label: "眉笔", image },
					{ value: "腮红", label: "腮红", image },
					{ value: "眼影", label: "眼影", image },
					{ value: "防晒", label: "防晒", image },
					{ value: "喷雾", label: "喷雾", image },
					{ value: "香水", label: "香水", image },
					{ value: "其它", label: "其它", image },
				],
			},
			{
				label: "衣服物品类",
				title: "衣服物品类",
				items: [
					{ value: "男装", label: "男装", image },
					{ value: "女装", label: "女装", image },
					{ value: "男鞋", label: "男鞋", image },
					{ value: "女鞋", label: "女鞋", image },
					{ value: "包包", label: "包包", image },
					{ value: "其它", label: "其它", image },
				],
			},
			{
				label: "饰品",
				title: "饰品",
				items: [
					{ value: "手表", label: "手表", image },
					{ value: "项链", label: "项链", image },
					{ value: "手链", label: "手链", image },
					{ value: "戒指", label: "戒指", image },
					{ value: "耳饰", label: "耳饰", image },
					{ value: "眼镜", label: "眼镜", image },
					{ value: "帽子", label: "帽子", image },
					{ value: "发饰", label: "发饰", image },
					{ value: "其它", label: "其它", image },
				],
			},
			{
				label: "文娱",
				title: "文娱",
				items: [
					{ value: "教材", label: "教材", image },
					{ value: "笔记", label: "笔记", image },
					{ value: "文具", label: "文具", image },
					{ value: "球/球拍", label: "球/球拍", image },
					{ value: "护具", label: "护具", image },
					{ value: "跳绳", label: "跳绳", image },
					{ value: "自行车", label: "自行车", image },
					{ value: "棋牌", label: "棋牌", image },
					{ value: "其它", label: "其它", image },
				],
			},
			{
				label: "其它",
				title: "其它",
				items: [
					{ value: "药品", label: "药品", image },
					{ value: "零食", label: "零食", image },
					{ value: "周边", label: "周边", image },
					{ value: "其它", label: "其它", image },
				],
			}
		],
	},
	onSideBarChange(e) {
		const { value } = e.detail;
		this.setData({ sideBarIndex: value, scrollTop: 0 });
	},
	toDetail(e) {
		const classify = e.currentTarget.dataset.value
		wx.navigateTo({
			url: '../../pages/classifyDetail/classifyDetail?classify=' + JSON.stringify(classify),
		})
	},

	/**
 * 生命周期函数--监听页面显示
 */
	onShow() {
		if (typeof this.getTabBar === 'function' && this.getTabBar()) {
			this.getTabBar().setData({
				select: 1
			})
		}
		this.onLoad();
	},
});

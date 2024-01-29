const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);

Page({
	offsetTopList: [],
	data: {
		sideBarIndex: 0,
		scrollTop: 0,
		categories: [
			{
				label: '选项一',
				title: '标题一',
				items,
			},
			{
				label: '选项二',
				title: '标题二',
				items: items.slice(0, 10),
			},
			{
				label: '选项三',
				title: '标题三',
				items: items.slice(0, 6),
			}
		],
	},
	onSideBarChange(e) {
		const { value } = e.detail;
		console.log(e);
		this.setData({ sideBarIndex: value, scrollTop: 0 });
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

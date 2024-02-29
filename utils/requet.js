// ----http----
// baseURL
const baseUrl = "http://127.0.0.1:30001";
// 封装微信请求方法
const request = (params) => {
	let url = params.url;
	let data = params.data;
	let method = params.method;
	let header = {
		"Content-Type": "application/json"
	};

	if (wx.getStorageSync("token")) {
		// token或者Authorization
		header.token = wx.getStorageSync("token");
	}
	return new Promise((resolve, reject) => {
		wx.request({
			url: baseUrl + url, // api url
			method: method, // get/post
			data: data, // 请求参数
			header: header, // 头部
			success(res) {
				resolve(res);
				// 判断状态码，此处和后端约定好
				// if (res.statusCode == 200) {
				// 	if (res.data.Code === 20000) {
				// 		resolve(res.data);
				// 	} else {
				// 		reject(res.data)
				// 	}

				// } else {
				// 	// 其他异常
				// 	switch (res.statusCode) {
				// 		case 404:
				// 			wx.showToast({
				// 				title: '未知异常',
				// 				duration: 2000,
				// 			})
				// 			break;
				// 		default:
				// 			wx.showToast({
				// 				title: '请重试...',
				// 				duration: 2000,
				// 			})
				// 			break;
				// 	}
				// 	reject("未知错误,请稍后再试");
				// }
			},
			fail(err) {
				console.log(err);
				if (err.errMsg.indexOf('request:fail') !== -1) {
					wx.showToast({
						title: '网络异常',
						icon: "error",
						duration: 2000
					})
				} else {
					wx.showToast({
						title: '未知异常',
						duration: 2000
					})
				}
				reject(err);
			},
			complete() {
				wx.hideLoading()
			},
		});
	});
};

module.exports = {
	baseUrl,
	request,
}
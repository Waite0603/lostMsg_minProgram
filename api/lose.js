import {
	request
} from "../utils/requet";

// 获取主页数据
export const getLose = (type) => {
	return request({
		url: "/getLose",
		data: {
			type: type
		},
		method: "GET"
	});
};


//  收藏物品
export const collectItem = (id, openId) => {
	return request({
		url: "/toCollection",
		data: {
			id: id,
			openid: openId
		},
		method: "POST"
	});
};

//  取消收藏物品
export const cancelCollection = (id, openId) => {
	return request({
		url: "/cancelCollection",
		data: {
			id: id,
			openid: openId
		},
		method: "POST"
	});
};

// 查看收藏物品
export const checkCollection = (id, openId) => {
	return request({
		url: "/checkCollection",
		data: {
			id: id,
			openid: openId
		},
		method: "POST"
	});
};

// 查看收藏夹内容
export const getCollectLose = (openId, type) => {
	return request({
		url: "/getCollection",
		data: {
			openid: openId,
			type: type
		},
		method: "POST"
	});
};

// 查看我的发布内容
export const getMyPublish = (openId, type) => {
	return request({
		url: "/getMyPublish",
		data: {
			openid: openId,
			type: type
		},
		method: "GET"
	});
};
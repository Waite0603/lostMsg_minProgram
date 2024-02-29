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
	})
}
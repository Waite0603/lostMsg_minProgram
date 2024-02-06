import {
  request
} from "../utils/requet"


// 列表
export const uploadImg = (params) => {
	console.log(params);
  return request({
    url: '/uploadImg',
    data: {
			file: pa
		},
    method: 'POST',
  })
}

export const publishSearchFrom = ( data ) => {
	console.log(data);
	return request({
    url: '/publish',
    data: data,
    method: 'POST',
  })
};




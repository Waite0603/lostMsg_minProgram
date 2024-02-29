import {
  request
} from "../utils/requet"

export const uploadImg = (params) => {
	console.log(params);
  return request({
    url: '/uploadImg',
    data: {
			file: params
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




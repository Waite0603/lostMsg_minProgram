import {
  request
} from "../utils/requet"


export const register = ( data ) => {
	console.log(data);
	return request({
    url: '/register',
    data: data,
    method: 'POST',
  })
};

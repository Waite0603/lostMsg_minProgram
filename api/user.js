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

export const login = ( data ) => {
	console.log(data);
	return request({
    url: '/toLogin',
    data: data,
    method: 'POST',
  })
};

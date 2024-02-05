import {
  request
} from "../utils/requet"


// 列表
export const uploadImg = (params) => {
  return request({
    url: '/uploadImg',
    data: params,
    method: 'POST',
  })
}



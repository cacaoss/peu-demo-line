import request from 'umi-request';

export async function setSpaceSn(params) {
  return request('/api/space/setSpaceSn',{
    method: 'POST',
    data: params,
  })
}

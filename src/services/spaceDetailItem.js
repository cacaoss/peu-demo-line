import request from 'umi-request';

export async function querySpaceDetailItem(params) {
  return request('/api/space/getSpaceDetailItem', {
    params,
  });
}

export async function setSpaceDetailItem(params) {
  return request('/api/space/setSpaceDetailItem',{
    method: 'POST',
    data: params,
  })
}

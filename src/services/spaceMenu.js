import request from 'umi-request';

export async function setSpaceClear(params) {
  return request('/api/space/setSpaceClear',{
    method: 'POST',
    data: params,
  })
}

export async function setSpaceDisable(params) {
  return request('/api/space/setSpaceDisable',{
    method: 'POST',
    data: params,
  })
}

export async function setSpaceEnable(params) {
  return request('/api/space/setSpaceEnable',{
    method: 'POST',
    data: params,
  })
}

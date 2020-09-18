import request from 'umi-request';

export async function querySpaceList(params) {
  return request('/api/space/getAllSpaceList', {
    params,
  });
}

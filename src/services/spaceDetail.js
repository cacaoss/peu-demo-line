import request from 'umi-request';

export async function querySpaceDetail(params) {
  return request('/api/space/getSpaceDetail', {
    params,
  });
}

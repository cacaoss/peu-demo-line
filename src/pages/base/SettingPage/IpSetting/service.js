import request from '@/utils/request';

export async function queryRule(params) {
  const resData = await request('/api/ipSetting/GetIpSettingList', {
    params,
  });
  return {data: resData.resultList};
}

export async function addRule(params) {
  return request('/api/ipSetting/AddIpSetting', {
    method: 'POST',
    data: {...params},
  });
}

export async function updateRule(params) {
  return request('/api/ipSetting/UpdateIpSetting', {
    method: 'POST',
    data: {...params},
  });
}

export async function removeRule(params) {
  return request('/api/ipSetting/deleteIpSetting', {
    method: 'POST',
    data: {...params},
  });
}

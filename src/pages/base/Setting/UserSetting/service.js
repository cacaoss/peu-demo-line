import request from '@/utils/request';

export async function queryRule(params) {
  const resData = await request('/api/user/GetUserList', {
    params,
  });
  return {data: resData.resultList};
}

export async function addRule(params) {
  return request('/api/user/AddUser', {
    method: 'POST',
    data: {...params},
  });
}

export async function updateRule(params) {
  return request('/api/user/UpdateUser', {
    method: 'POST',
    data: {...params},
  });
}

export async function removeRule(params) {
  return request('/api/user/deleteUser', {
    method: 'POST',
    data: {...params},
  });
}

import request from '@/utils/request';

export async function queryCurrent() {
  return request('/api/user/getCurrentUser');
}

export async function queryUsers() {
  return request('/api/users');
}

export async function queryNotices() {
  return request('/api/notices');
}

import { querySpaceDetail } from '@/services/spaceDetail';

const Model = {
  namespace: 'spaceDetail',
  state: {
    resData:null,
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(querySpaceDetail, payload);
      yield put({
        type: 'querySpaceDetail',
        payload: response,
      });
    },
  },
  reducers: {
    querySpaceDetail(state, action) {
      return {...state, resData: action.payload };
    },
  },
};
export default Model;

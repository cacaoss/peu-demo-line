import { querySpaceList } from '@/services/spaceList';

const Model = {
  namespace: 'spaceList',
  state: {
    resData:null,
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(querySpaceList, payload);
      yield put({
        type: 'queryList',
        payload: response,
      });
    },
  },
  reducers: {
    queryList(state, action) {
      return { ...state, resData: action.payload };
    },
  },
};
export default Model;

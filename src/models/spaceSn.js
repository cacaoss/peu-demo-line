import { setSpaceSn } from '@/services/spaceSn.js';

const Model = {
  namespace: 'spaceSn',
  state: {
    resData:null,
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(setSpaceSn, payload);
      yield put({
        type: 'setSpaceSnReducer',
        payload: response,
      });
    },
  },
  reducers: {
    setSpaceSnReducer(state, action) {
      return { ...state, resData: action.payload };
    },
  },
};
export default Model;

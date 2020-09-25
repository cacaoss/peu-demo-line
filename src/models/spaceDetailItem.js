import { querySpaceDetailItem,setSpaceDetailItem } from '@/services/spaceDetailItem';

const Model = {
  namespace: 'spaceDetailItem',
  state: {
    resData:null,
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(querySpaceDetailItem, payload);
      yield put({
        type: 'querySpaceDetailItemReducer',
        payload: response,
      });
    },
    *setSpaceDetailItem({ payload }, { call, put }) {
      const response = yield call(setSpaceDetailItem, payload);
      yield put({
        type: 'setSpaceDetailItemReducer',
        payload: response,
      });
    },
  },
  reducers: {
    querySpaceDetailItemReducer(state, action) {
      return {...state, resData: action.payload };
    },
    setSpaceDetailItemReducer(state, action) {
      return {...state, resData: action.payload };
    },
  },
};
export default Model;

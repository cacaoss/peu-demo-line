import { setSpaceClear,setSpaceDisable,setSpaceEnable } from '@/services/spaceMenu.js';

const Model = {
  namespace: 'spaceMenu',
  state: {
    resData:null,
  },
  effects: {
    *clearFetch({ payload }, { call, put }) {
      const response = yield call(setSpaceClear, payload);
      yield put({
        type: 'setSpaceMenuReducer',
        payload: response,
      });
    },
    *disableFetch({ payload }, { call, put }) {
      const response = yield call(setSpaceDisable, payload);
      yield put({
        type: 'setSpaceMenuReducer',
        payload: response,
      });
    },
    *enableFetch({ payload }, { call, put }) {
      const response = yield call(setSpaceEnable, payload);
      yield put({
        type: 'setSpaceMenuReducer',
        payload: response,
      });
    },
  },
  reducers: {
    setSpaceMenuReducer(state, action) {
      return { ...state, resData: action.payload };
    },
  },
};
export default Model;

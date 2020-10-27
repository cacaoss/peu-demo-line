import {queryCurrent, queryUsers} from '@/services/user';

const UserModel = {
  namespace: 'user',
  state: {
    resData: null,
    currentUser: {},
  },
  effects: {
    * fetchCurrent(_, {call, put}) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
    * fetchUsers(_, {call, put}) {
      const response = yield call(queryUsers);
      yield put({
        type: 'saveUsers',
        payload: response,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return {...state, currentUser: action.payload || {}};
    },
    saveUsers(state, action) {
      return {...state, resData: action.payload};
    },

    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
export default UserModel;

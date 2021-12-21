import { Reducer, Effect, Subscription } from 'umi';
import { getRemoteList } from './service';

interface UserModelType {
  namespace: 'users';
  state: {};
  reducers: {
    getList: Reducer;
  };
  effects: {
    getRemote: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const UserModel: UserModelType = {
  namespace: 'users',
  state: {},
  // 同步更新 state
  reducers: {
    getList(state, { payload }) {
      return payload;
    },
  },
  // 异步
  effects: {
    *getRemote(action, { put, call }) {
      const res = yield call(getRemoteList);
      yield put({
        type: 'getList',
        payload: {
          list: res.data,
          meta: res.meta,
        },
      })
    },
  },
  // 订阅
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemote',
          })
        }
      });
    }
  }
}

export default UserModel;
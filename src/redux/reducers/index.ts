import {persistCombineReducers} from 'redux-persist';
import constants from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
  key: constants.asyncStorageKey,
  storage: AsyncStorage,
};

const appReducer = persistCombineReducers(config, {});

const rootReducer = ({state, action}: any) => {
  return appReducer(state, action);
};

export default rootReducer;

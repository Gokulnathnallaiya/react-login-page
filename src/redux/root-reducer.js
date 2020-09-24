import {combineReducers} from 'redux';
import {persistReducer } from 'redux-persist';
import userReducer from './user/user.reducer';
import storage from 'redux-persist/lib/storage';


const persistConfig= {
    key:'root',
    storage,
    whitlelist:['user']
}

const rootreducer = combineReducers({
    user:userReducer
});


export default persistReducer(persistConfig,rootreducer)

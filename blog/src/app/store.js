import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './redux/reducers/user';

const authInfo = {
    key: 'authInfo',
    storage: sessionStorage,
};

const reducer = combineReducers({
    auth: authReducer,
});

// config 작성
const persistConfig = {
    key: 'auth', // 로컬스토리지에 저장할 키값
    storage, // local 또는 세션스토리지
    whitelist: ['auth'], // 저장할 리듀서
};

const persistedReducer = persistReducer(
    persistConfig,
    reducer,
);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // 이부분 추가
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

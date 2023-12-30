import axios from 'axios';
import { all, fork, takeEvery } from 'redux-saga/effects';
import dotenv from 'dotenv';
import authSaga from './authSaga';
import postSaga from './postSaga';

dotenv.config();

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASIC_SERVER_URL;

export default function* rootSaga() {
    yield all([fork(authSaga), fork(postSaga)]);
} //여러값을 반환하게 하는 최신문법함수

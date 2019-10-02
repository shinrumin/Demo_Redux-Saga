import { put, call, takeLatest, all, fork } from 'redux-saga/effects'
import { incrementSuccessAction, decrementSuccessAction } from '../../actions'
import { INCREMENT, DECREMENT } from '../../actions/actionTypes';

function* increment(){
    yield put(incrementSuccessAction);
}

export function* watchIncrement(){
    yield takeLatest(INCREMENT, increment)
}

function* decrement(){
    yield put(decrementSuccessAction);
}

export function* watchDecrement(){
    yield takeLatest(DECREMENT, decrement)
}

export default function* rootCounterSaga(){
    yield all([
        fork(watchIncrement),
        fork(watchDecrement)
    ])
}
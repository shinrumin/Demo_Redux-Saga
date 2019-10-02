import { all, fork } from 'redux-saga/effects'
import counterSaga from './Counter'

export default function* rootSaga(){
    yield all([
        fork(counterSaga)
    ])
}
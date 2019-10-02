import { createStore, applyMiddleware, compose } from 'redux';
import allReducer from '../reducers'
import createMiddlewareSaga from 'redux-saga'
import rootSaga from '../sagas'

const middlewareSaga = createMiddlewareSaga();

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(
applyMiddleware(middlewareSaga),
// other store enhancers if any
);
const store = createStore(allReducer, enhancer);

middlewareSaga.run(rootSaga);

export default store;
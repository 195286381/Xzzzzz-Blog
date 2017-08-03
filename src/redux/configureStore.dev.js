/**
 * create by Xzzzzz in 03/08/2017
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createFetchMiddleware from 'redux-composable-fetch'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'
// import DevTools from './DevTools'

const fetchMiddleware = createFetchMiddleware({
  afterFetch({ action, result }) {
    return result.json().then(data => {
      return Promise.resolve({
        action,
        result: data,
      });
    });
  },
});

const middlewares = []
middlewares.push(thunkMiddleware)
middlewares.push(fetchMiddleware)
middlewares.push(routerMiddleware)

const storeEnhancer = compose(
applyMiddleware(...middlewares),
// DevTools.instrument()
)

const reducers = combineReducers(Object.assign({}, rootReducer, {
    routing: routerReducer,
}))

const configureStore = (initialState) => {
    const store = createStore(reducers, initialState, storeEnhancer)
    return store
}

export default configureStore
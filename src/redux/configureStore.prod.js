/**
 * create by Xzzzzz in 03/08/2017
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createFetchMiddleware from 'redux-composable-fetch'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'

const fetchMiddleware = createFetchMiddleware()

const middlewares = []
// middlewares.push(thunkMiddleware)
middlewares.push(routerMiddleware)
// middlewares.push(fetchMiddleware)

const storeEnhancer = compose(
    applyMiddleware(...middlewares),
)

const reducer = combineReducers(Object.assign({}, rootReducer, {
    routing: routerReducer,
}))

const configureStore = (initialState) => {
    const store = createStore(reducer, initialState, storeEnhancer)
    return store
}

export default configureStore
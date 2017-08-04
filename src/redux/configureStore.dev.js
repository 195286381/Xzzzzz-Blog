/**
 * create by Xzzzzz in 03/08/2017
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import rootReducer from './reducers'
import DevTools from './DevTools'



const middlewares = []
middlewares.push(thunkMiddleware)

// debugger
const storeEnhancer = compose(
applyMiddleware(thunkMiddleware),
DevTools.instrument()
)

const reducers = combineReducers(Object.assign({}, rootReducer, {
    routing: routerReducer,
}))

const configureStore = (initialState) => {
    const store = createStore(reducers, initialState, storeEnhancer)
    return store
}

export default configureStore
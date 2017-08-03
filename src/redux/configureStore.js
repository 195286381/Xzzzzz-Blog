import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

const storeEnhancer = compose(
applyMiddleware()
)

const configureStore = (initialState) => {
    return createStore(reducers, initialState, storeEnhancer)
}

export default configureStore
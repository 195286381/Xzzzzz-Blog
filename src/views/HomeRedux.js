import { combineReducer } from 'redux'

// 引入 reducer 以及 actionCreator
import list, { loadArticles } from '../components/Home/PreviewListRedux'

export default combineReducer({
    list,
})

export const actions = {
    loadArticles,
}
import { combineReducers } from 'redux'

// 引入 reducer 以及 actionCreator
import list, { loadArticles, loadError } from '../components/Home/PreviewListRedux'

export default combineReducers({
    list,
})

export const actions = {
    loadArticles,
    loadError
}

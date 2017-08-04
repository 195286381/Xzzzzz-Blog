import React from 'react'
import { bindActionCreators } from 'redux'
import PreviewList from '../components/Home/PreviewList'
import { actions } from './HomeRedux'
import { connect } from 'react-redux'
import './Home.css'
// import { push } from 'react-router-redux'

const Home = (props) => {
    const { loadArticles, articleList, push } = props
    // debugger
    return (
        <div>
            <h1>Home ~</h1>
            <p class="h20"></p>
            <PreviewList {...props} />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    // debugger
    // console.dir(state)
    return {
        loading: state.home.list.loading,
        error: state.home.list.error,
        articleList: state.home.list.articleList,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadArticles: () => {
            dispatch(actions.loadArticles())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
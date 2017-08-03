import React from 'react'
import { bindActionCreators } from 'redux'
import PreviewList from '../components/Home/PreviewList'
import { actions } from './HomeRedux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const Home = (props) => {
    const { loadArticles, articleList, push } = props
    return (
        <div>
            <h1>Home</h1>
            <PreviewList {...props} />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        articleList: state.home.list.articleList,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        push,
        actions: bindActionCreators(actions, dispatch),
    }
}

export default Home (mapStateToProps, mapDispatchToProps)(Home)
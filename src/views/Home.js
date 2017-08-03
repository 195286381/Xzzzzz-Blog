import React from 'react'
import { bindActionCreators } from 'redux'
import PreviewList from '../components/Home/PreviewList'
import { actions } from './HomeRedux'
import { connect } from 'react-redux'
// import { push } from 'react-router-redux'

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
    // console.log('111', state)
    return {
        articleList: state.home.list.articleList,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // push,
        loadArticles: () => {
            dispatch({
                type:'LOAD_ARTICLES_ERROR',
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
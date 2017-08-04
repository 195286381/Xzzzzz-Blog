import React from 'react'
import { bindActionCreators } from 'redux'
import PreviewList from '../components/Home/PreviewList'
import { actions } from './HomeRedux'
import { connect } from 'react-redux'
// import { push } from 'react-router-redux'

const Home = (props) => {
    const { loadArticles, articleList, push } = props
    // debugger
    return (
        <div>
            <h1>Home</h1>
            <PreviewList {...props} />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.dir(state)
    // console.log('111', state)
    return {
        articleList: state.home.list.articleList,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadArticles: () => {
            dispatch(actions.loadError)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
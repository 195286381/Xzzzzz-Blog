import React, { Component } from 'react'
import Preview from './Preview'
import PropTypes from 'prop-types'

class PreviewList extends Component {
    // static propTypes = {
    //     loading: PropTypes.bool,
    //     error: PropTypes.bool,
    //     articleList: PropTypes.arrayOf(PropTypes.object),
    //     loadArticles: PropTypes.any,
    // }

    componentDidMount() {
        debugger
        this.props.loadArticles()
    }

    render() {
        // debugger
        const { loading, error, articleList } = this.props

        if (error) {
            return (
                <p className="message">获取数据发生了错误, 0 - 0~~ 很尴尬</p>
            )
        }

        if (loading) {
            return (
                <p className="loading">数据加载中~ 请稍等 0 - 0~~~</p>
            )
        }

        return (
            <div>
                {articleList.map(item => (
                    <Preview {...item} key={item.id} />
                ))}
            </div>
        )
    }
}


export default PreviewList
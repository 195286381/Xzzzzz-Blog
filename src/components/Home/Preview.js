import React from 'react'
import './Preview.css'
import PropTypes from 'prop-types'

const Preview = (props) => (
    <article className="article-preview-item">
        <h1 className="title">{props.title}</h1>
        <span className="date">{props.date}</span>
        <p className="description">{props.description}</p>
    </article>
)

Preview.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
    description:PropTypes.string,
}

export default Preview
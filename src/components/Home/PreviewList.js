import React from 'react'
import Preview from './Preview'
import PropTypes from 'prop-types'

const PreviewList = (props) => {
    return (
        <div>
            {props.data.map(item => (
                <Preview {...item} key={item.id }/>
            ))}
        </div>
    )
}

PreviewList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
}

export default PreviewList
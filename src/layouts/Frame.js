/**
 * create by Xzzzzz in 03/08/2017
 */
import React from 'react'
import Nav from './Nav'

const Frame = ({children}) => {
    return (
        <div className="frame">
            <section className="header">
                <Nav />
            </section>
            <section className="container">
                {children}
            </section>
        </div>
    )
}

export default Frame
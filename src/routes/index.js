/**
 * create by Xzzzzz in 03/08/2017
 */
import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import Frame from '../layouts/Frame'
import Home from '../views/Home'
import Detail from '../views/Detail'
import F0F from  '../views/404'

const history = createHistory()
const routes = (
        <ConnectedRouter history={history}>
            <div>
                <Frame>
                    <Route exact path="/" component={Home} />
                    <Route path="/detail" component={Detail} />
                </Frame>          
            </div>
        </ConnectedRouter>
)

export default routes
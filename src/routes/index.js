import React from 'react'
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'

import Frame from '../layouts/Frame'
import Home from '../views/Home'
import Detail from '../views/Detail'
import F0F from  '../views/404'



const routes = (
        <Router>
            <div>
                <Frame>
                    <Route exact path="/" component={Home} />
                    <Route path="/detail" component={Detail} />
                </Frame>          
            </div>
        </Router>
)

export default routes
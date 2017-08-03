import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import routes from './routes'
import './app.css'

const store = configureStore()

render(
    <Provider store={store}>
         <div>
            {routes}
         </div>
    </Provider>
    ,document.getElementById('root')
)
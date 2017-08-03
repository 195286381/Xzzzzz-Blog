import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import DevTools from './redux/DevTools'
import configureStore from './redux/configureStore'
import routes from './routes'
import './app.css'

const store = configureStore()

render(
    <Provider store={store}>
         <div>
            {routes}
            <DevTools />
         </div>
    </Provider>
    ,document.getElementById('root')
)
/**
 * create by Xzzzzz in 03/08/2017
 */
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changeMonitorKey='ctrl-q'>
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
)

export default DevTools
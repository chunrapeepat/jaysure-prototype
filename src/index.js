import React from 'react'
import ReactDOM from 'react-dom'
import {injectGlobal} from 'styled-components'

import App from './components/App'
import 'antd/dist/antd.css'

// global styled belong here
injectGlobal`
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))

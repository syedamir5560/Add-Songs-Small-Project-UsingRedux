import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './ReduxToolkit/One/Store/index.jsx'
import './App.css'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Main from './ReduxToolkit/One/Main.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <>


    <Provider store={store}>
        <App/>
    </Provider>


    {/* <BrowserRouter> 
    <Provider store={store} >
      <App/>
    </Provider>
    </BrowserRouter> */}


  </>,
)
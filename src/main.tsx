import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

import './assest/style/main.less'
import store from './redux/configureStore'
import { MainRouter } from './routes/index'


const history = createBrowserHistory();

const App = () => (
  <ConfigProvider locale={zh_CN}>
    <Provider store={store}>
      <div className="main-content">
        <Router history={history}>
          <MainRouter/>
        </Router>
      </div>
    </Provider>
  </ConfigProvider>
)

export default App

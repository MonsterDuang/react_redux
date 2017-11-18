import React from 'react'
import ReactDOM from 'react-dom'
// 引入 react-redux
import { Provider } from 'react-redux'
// 引入 redux 获取 redux 里面一个叫createStore 的方法
import { createStore } from 'redux'
// 引入reducers
import reducers from './redux/reducers'
//初始化
const store = createStore(reducers)

import App from './App'

ReactDOM.render(
  <Provider store={store}> 
    <App /> 
  </Provider>,
  document.getElementById("app"))
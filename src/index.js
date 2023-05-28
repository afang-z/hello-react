// 引入react核心库
import React from 'react'
// 引入reactDOM
import ReactDOM from 'react-dom/client'
import App from './App'

// 渲染App到页面

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
    <App />
//   </React.StrictMode>
);
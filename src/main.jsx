import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import ThemeProvider from './utils/Theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('__app'),
)

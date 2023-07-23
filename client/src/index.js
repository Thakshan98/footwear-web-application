import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin'

Kommunicate.init('12c1660e4328d6f352d4424bd488f0d67', {
  automaticChatOpenOnNavigation: true,
  popupWidget: true,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Main from './containers/Main'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}

export default App

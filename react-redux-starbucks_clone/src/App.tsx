import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Menu from './components/menu/Menu'
import Main from './containers/Main'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Main />
    </BrowserRouter>
  )
}

export default App

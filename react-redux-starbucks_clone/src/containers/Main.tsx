import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Menu from '../components/menu/Menu'
import { ContainerStyles } from './Container.styles'

const Main: React.FC = () => {
  return (
    <>
      <Menu />
      <ContainerStyles.Main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ContainerStyles.Main>
    </>
  )
}

export default Main

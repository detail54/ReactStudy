import React from 'react'
import Home from '../components/home/Home'
import Menu from '../components/menu/Menu'
import { ContainerStyles } from './Container.styles'

const Main: React.FC = () => {
  return (
    <>
      <Menu />
      <ContainerStyles.Main>
        <Home />
      </ContainerStyles.Main>
    </>
  )
}

export default Main

import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Menu from '../components/menu/Menu'
import { ContainerStyles } from './Container.styles'

const Main: React.FC = () => {
  return (
    <>
      <Menu />
      <ContainerStyles.Main>
        <Route exact path='/' component={Home} />
      </ContainerStyles.Main>
    </>
  )
}

export default Main

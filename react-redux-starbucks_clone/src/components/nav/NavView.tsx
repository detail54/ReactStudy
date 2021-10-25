import React from 'react'
import { NavStyles } from './Nav.styles'

interface IProps {
  list: JSX.Element[]
}

const MenuView: React.FC<IProps> = (props) => {
  const { list } = props

  return (
    <NavStyles.Nav>
      <NavStyles.MainNav>{list}</NavStyles.MainNav>
    </NavStyles.Nav>
  )
}

export default MenuView

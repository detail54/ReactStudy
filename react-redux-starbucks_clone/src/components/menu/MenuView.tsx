import React from 'react'
import { MenuStyles } from './Menu.styles'

interface IProps {
  list: JSX.Element[]
}

const MenuView: React.FC<IProps> = (props) => {
  const { list } = props

  return (
    <MenuStyles.Menu>
      <MenuStyles.MainMenu>{list}</MenuStyles.MainMenu>
    </MenuStyles.Menu>
  )
}

export default MenuView

import React from 'react'
import MenuView from './MenuView'
import menuListItem from '../../config/menuList'
import ListItem from '../../common/listItem/ListItem'

const Menu: React.FC = () => {
  const menuList = menuListItem.map((menu) => (
    <ListItem key={menu.id} item={menu.menuName} />
  ))

  return <MenuView list={menuList} />
}

export default Menu

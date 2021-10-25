import React from 'react'
import NavView from './NavView'
import { navNameList } from '../../config/navNames'
import ListItem from '../../common/listItem/ListItem'

const Nav: React.FC = () => {
  const navList = navNameList.mainNavNames.map((nav) => (
    <ListItem
      key={nav.id}
      item={nav.menuName}
      fontSize='20px'
      size='large'
      margin='10px'
      align='center'
    />
  ))

  return <NavView list={navList} />
}

export default Nav

import React from 'react'
import NavView from './NavView'
import { navNameList } from '../../config/navNames'
import ListItem from '../../common/listItem/ListItem'

const Nav: React.FC = () => {
  const mainnNavList = navNameList.mainNavNames.map((nav) => (
    <ListItem
      key={nav.id}
      item={nav.menuName}
      fontSize='13px'
      fontWeight='lighter'
      align='center'
      height='56px'
      alignItems='top'
      padding='10px 25px 0px 25px'
      hoverColor='#669900'
      hoverBgColor='#2C2A29'
      cursor='pointer'
      hoverTextDeco='underline'
    />
  ))

  const subNavList = navNameList.subNavNames.map((nav) => (
    <ListItem
      key={nav.id}
      item={nav.menuName}
      fontSize='13px'
      padding='10px 15px'
      margin='9px 0px'
      align='center'
      height='20px'
      hoverTextDeco='underline'
      cursor='pointer'
    />
  ))

  return <NavView mainList={mainnNavList} subNavList={subNavList} />
}

export default Nav

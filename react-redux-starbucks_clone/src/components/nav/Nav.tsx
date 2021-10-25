import React, { useState } from 'react'
import NavView from './NavView'
import { navNameList } from '../../config/navNames'
import ListItem from '../../common/listItem/ListItem'

const Nav: React.FC = () => {
  const [searchVisit, setSearchVisit] = useState(false)
  const [searchText, setSearchText] = useState('')

  const onSearch = () => {
    if (!searchVisit) {
      setSearchVisit(true)
    } else if (searchVisit && searchText === '') {
      setSearchVisit(false)
    } else {
      alert(searchText)
    }
  }

  const onChangeSearch = (text: string) => {
    setSearchText(text)
  }

  const mainnNavList = navNameList.mainNavNames.map((nav) => (
    <ListItem
      key={nav.id}
      item={nav.menuName}
      itemFontSize='13px'
      align='center'
      itemHeight='56px'
      alignItems='top'
      padding='10px 25px 0px 25px'
      hoverColor='#669900'
      hoverBgColor='#2C2A29'
      itemCursor='pointer'
      hoverTextDeco='underline'
    />
  ))

  const subNavList = navNameList.subNavNames.map((nav) => (
    <ListItem
      key={nav.id}
      item={nav.menuName}
      itemFontSize='13px'
      padding='10px 15px'
      margin='9px 0px'
      align='center'
      itemHeight='20px'
      hoverTextDeco='underline'
      itemCursor='pointer'
    />
  ))

  return (
    <NavView
      mainList={mainnNavList}
      subNavList={subNavList}
      onChangeSearch={onChangeSearch}
      onSearch={onSearch}
      searchVisit={searchVisit}
    />
  )
}

export default Nav

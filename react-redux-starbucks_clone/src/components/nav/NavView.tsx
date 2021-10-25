import React from 'react'
import { NavStyles } from './Nav.styles'

interface IProps {
  mainList: JSX.Element[]
  subNavList: JSX.Element[]
}

const MenuView: React.FC<IProps> = (props) => {
  const { mainList, subNavList } = props

  return (
    <NavStyles.Nav>
      <NavStyles.NavBox>
        <NavStyles.HeaderLeft>
          <NavStyles.LogoBox />
        </NavStyles.HeaderLeft>
        <NavStyles.HeaderRight>
          <NavStyles.SubNav>
            {subNavList}
            <NavStyles.SearchBox>
              <NavStyles.SearchInput placeholder='통합검색' />
              <NavStyles.Searchicon />
            </NavStyles.SearchBox>
          </NavStyles.SubNav>
          <NavStyles.MainNav>{mainList}</NavStyles.MainNav>
        </NavStyles.HeaderRight>
      </NavStyles.NavBox>
    </NavStyles.Nav>
  )
}

export default MenuView

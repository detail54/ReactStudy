import React from 'react'
import { MenuStyles } from './Menu.styles'

interface IProps {
  mainnMenuList: JSX.Element[]
  subMenuList: JSX.Element[]
  onChangeSearch: (text: string) => void
  onSearch: () => void
  searchVisit: boolean
}

const MenuView: React.FC<IProps> = (props) => {
  const { subMenuList, mainnMenuList, onChangeSearch, onSearch, searchVisit } =
    props

  return (
    <MenuStyles.Menu>
      <MenuStyles.MenuBox>
        <MenuStyles.HeaderLeft>
          <MenuStyles.LogoBox />
        </MenuStyles.HeaderLeft>
        <MenuStyles.HeaderRight>
          <MenuStyles.SubMenu>
            {subMenuList}
            <MenuStyles.SearchBox>
              <MenuStyles.SearchInput
                placeholder='통합검색'
                visit={searchVisit}
                onChange={(event) => onChangeSearch(event.currentTarget.value)}
              />
              <MenuStyles.Searchicon onClick={onSearch} />
            </MenuStyles.SearchBox>
          </MenuStyles.SubMenu>
          <MenuStyles.MainMenu>{mainnMenuList}</MenuStyles.MainMenu>
        </MenuStyles.HeaderRight>
      </MenuStyles.MenuBox>
    </MenuStyles.Menu>
  )
}

export default MenuView

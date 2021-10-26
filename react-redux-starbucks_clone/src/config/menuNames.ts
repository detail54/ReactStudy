import * as IMenu from '../interfaces/IMenu'

const mainMenuNames: IMenu.IMenuListItem[] = [
  {
    id: 'nav1',
    menuName: 'COFFEE',
  },
  {
    id: 'nav2',
    menuName: 'MENU',
  },
  {
    id: 'nav3',
    menuName: 'STORE',
  },
  {
    id: 'nav4',
    menuName: 'RESPONSIBILITY',
  },
  {
    id: 'nav5',
    menuName: 'STARBUCKS REWARDS',
  },
  {
    id: 'nav6',
    menuName: "WHAT'S NEW",
  },
]

const subMenuNames: IMenu.IMenuListItem[] = [
  {
    id: 'subNav1',
    menuName: 'Sign In',
  },
  {
    id: 'subNav2',
    menuName: 'My Starbucks',
  },
  {
    id: 'subNav3',
    menuName: 'Customer Service & Ideas',
  },
  {
    id: 'subNav4',
    menuName: 'Find a Store',
  },
]

export const menuNameList = {
  mainMenuNames,
  subMenuNames,
}

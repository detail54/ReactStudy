import styled from 'styled-components'

const Nav = styled.header`
  width: 100%;
  height: 123px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: 0px;
  top: 0px;
  left: 0px;
  color: #555555;
  background: #f6f5ef;
`

const NavBox = styled.div`
  margin: 0px;
  height: 100%;
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLeft = styled.div`
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoBox = styled.div`
  width: 75px;
  height: 75px;
  cursor: pointer;
  background-image: url('https://www.starbucks.co.kr/common/img/common/logo.png');
  background-repeat: no-repeat;
  background-position: center;
`

const HeaderRight = styled.div`
  margin: 0px;
  height: 100%;
  width: 70%;
`

const MainNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchBox = styled.div`
  width: 182px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
`

const SearchInput = styled.input`
  width: 123px;
  height: 22px;
  font-size: 12px;
  padding: 0px 10px;
  border: none;
`

const Searchicon = styled.div`
  width: 34px;
  height: 34px;
  background-image: url('https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png');
  background-size: 20px 21px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`

export const NavStyles = {
  Nav,
  NavBox,
  HeaderLeft,
  LogoBox,
  HeaderRight,
  MainNav,
  SubNav,
  SearchBox,
  SearchInput,
  Searchicon,
}

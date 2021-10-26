import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
`

const Imgs = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0px 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  img:nth-child(1) {
    display: flex;
    align-self: flex-start;
    margin-top: 78px;
    z-index: 1;
    position: relative;
    left: 345px;
  }

  img:nth-child(2) {
    position: relative;
    left: -120px;
    bottom: 137px;
  }

  img:nth-child(3) {
    display: flex;
    align-self: flex-start;
    z-index: 1;
    position: relative;
    left: -130px;
    top: 120px;
  }

  img:nth-child(4) {
    display: flex;
    align-self: center;
    position: relative;
    left: -167px;
    bottom: 46px;
  }
`

export const HomeStyles = {
  Main,
  Imgs,
}

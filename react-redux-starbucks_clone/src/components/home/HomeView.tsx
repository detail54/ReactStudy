import React from 'react'
import Wrapper from '../../common/wrapper/Wrapper'
import { HomeStyles } from './Home.styles'

interface IProps {
  bgImgUrl: string
  setImgBox: JSX.Element[]
}

const HomeView: React.FC<IProps> = (props) => {
  const { bgImgUrl, setImgBox } = props

  return (
    <HomeStyles.Main>
      <Wrapper bgImageUrl={bgImgUrl} wrapHeight='646px'>
        <HomeStyles.Imgs>{setImgBox}</HomeStyles.Imgs>
      </Wrapper>
    </HomeStyles.Main>
  )
}

export default HomeView

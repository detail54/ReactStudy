import React from 'react'
import Button from '../../common/button/Button'
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
        <Button
          text='자세히 보기'
          btWidth='125px'
          btHeight='38px'
          btFontSize='15px'
          btborder='2px solid #a3a1a1'
          btborderRadius='5px'
          btFontColor='#A3A1A1'
          align='center'
          hoverTextDeco='underline'
          hoverBgColor='#a3a1a15d'
          btCursor='pointer'
          btTransition='.5s'
          btPosition='relative'
          btTop='225px'
          btLeft='515px'
        />
        <HomeStyles.Imgs>{setImgBox}</HomeStyles.Imgs>
      </Wrapper>
    </HomeStyles.Main>
  )
}

export default HomeView

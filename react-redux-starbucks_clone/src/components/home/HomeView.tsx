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
          btWidth='121px'
          btHeight='34px'
          btFontSize='15px'
          btborder='2px solid #a3a1a1'
          btborderRadius='5px'
          btFontColor='#A3A1A1'
          align='center'
          btPosition='relative'
          btTop='227px'
          btLeft='515px'
          hoverTextDeco='underline'
          hoverBgColor='#a3a1a15d'
          btTransition='.5s'
          btCursor='pointer'
          zIndex={1}
        />
        <HomeStyles.Imgs>{setImgBox}</HomeStyles.Imgs>
      </Wrapper>
    </HomeStyles.Main>
  )
}

export default HomeView

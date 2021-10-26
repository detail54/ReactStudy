import React from 'react'
import { IImgBoxProps } from '../../interfaces/ICommons'
import { ImgBoxStyles } from './ImgBox.styles'

const ImgBox: React.FC<IImgBoxProps> = (props) => {
  const {
    bgImgUrl,
    bgImgSize,
    bgImgPosition,
    bgImgRepeat,
    boxWidth,
    boxHeight,
    zIndex,
  } = props

  const styleProps = {
    bgImgUrl,
    bgImgSize,
    bgImgPosition,
    bgImgRepeat,
    boxWidth,
    boxHeight,
    zIndex,
  }

  return <ImgBoxStyles.Div {...styleProps} />
}

export default ImgBox

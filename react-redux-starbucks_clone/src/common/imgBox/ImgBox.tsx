import React from 'react'
import { IImgBoxProps } from '../../interfaces/ICommons'
import { ImgBoxStyles } from './ImgBox.styles'

const ImgBox: React.FC<IImgBoxProps> = (props) => {
  const {
    alt,
    imgUrl,
    zIndex,
    boxWidth,
    boxHeight,
    boxDisplay,
    boxJustify,
    boxAlignItems,
    boxAlignSelf,
    boxPosition,
    boxTop,
    boxBottom,
    boxLeft,
    boxRight,
  } = props

  const styleProps = {
    alt,
    zIndex,
    imgUrl,
    boxWidth,
    boxHeight,
    boxDisplay,
    boxJustify,
    boxAlignItems,
    boxAlignSelf,
    boxPosition,
    boxTop,
    boxBottom,
    boxLeft,
    boxRight,
  }

  return <ImgBoxStyles.Img {...styleProps} src={imgUrl} alt={alt} />
}

export default ImgBox

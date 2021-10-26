import React from 'react'
import { IButtonProps } from '../../interfaces/ICommons'
import { ButtonStyles } from './Button.styles'

const Button: React.FC<IButtonProps> = (props) => {
  const {
    btborder,
    btborderRadius,
    btWidth,
    btHeight,
    btFontColor,
    btBackground,
    btFontSize,
    btFontWeight,
    size,
    align,
    margin,
    padding,
    alignItems,
    btCursor,
    hoverBorder,
    hoverColor,
    hoverBgColor,
    hoverTextDeco,
    btTransition,
    btPosition,
    btTop,
    btBottom,
    btLeft,
    btRight,
    style,
    text,
    onClick,
  } = props

  const styleProps = {
    btborder,
    btborderRadius,
    btWidth,
    btHeight,
    btFontColor,
    btBackground,
    btFontSize,
    btFontWeight,
    size,
    align,
    margin,
    padding,
    alignItems,
    btCursor,
    hoverBorder,
    hoverColor,
    hoverBgColor,
    hoverTextDeco,
    btTransition,
    btPosition,
    btTop,
    btBottom,
    btLeft,
    btRight,
    style,
    text,
    onClick,
  }

  return <ButtonStyles.Button {...styleProps}>{text}</ButtonStyles.Button>
}

export default Button

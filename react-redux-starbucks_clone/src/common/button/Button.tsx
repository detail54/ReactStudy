import React from 'react'
import { IButtonProps } from '../../interfaces/ICommons'
import { ButtonStyles } from './Button.styles'

const Button: React.FC<IButtonProps> = (props) => {
  const {
    btborder,
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
    style,
    text,
    onClick,
  } = props

  const styleProps = {
    btborder,
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
    style,
    text,
    onClick,
  }

  return <ButtonStyles.Button {...styleProps}>{text}</ButtonStyles.Button>
}

export default Button

/* eslint-disable react/require-default-props */
import React from 'react'
import { IWrapperProps } from '../../interfaces/ICommons'
import { WrapperStyles } from './Wrapper.styles'

const Wrapper: React.FC<IWrapperProps> = (props) => {
  const {
    bgImageUrl,
    bgColor,
    bgSize,
    bgRepeat,
    bgPosition,
    wrapWidth,
    wrapHeight,
    wrapCursor,
    wrapBackground,
    wrapMargin,
    wrapPadding,
    children,
  } = props

  const styleProps = {
    bgImageUrl,
    bgColor,
    bgSize,
    bgRepeat,
    bgPosition,
    wrapWidth,
    wrapHeight,
    wrapCursor,
    wrapBackground,
    wrapMargin,
    wrapPadding,
  }

  return (
    <WrapperStyles.Section {...styleProps}>{children}</WrapperStyles.Section>
  )
}

export default Wrapper

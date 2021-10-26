/* eslint-disable react/require-default-props */
import React from 'react'
import { WrapperStyles } from './Wrapper.styles'

interface IProps {
  backgroundImageUrl?: string
  wrapWidth?: string
  wrapHeight?: string
  wrapCursor?: string
  wrapBackground?: string
  wrapMargin?: string
  wrapPadding?: string
}

const Wrapper: React.FC<IProps> = (props) => {
  const {
    backgroundImageUrl,
    wrapWidth,
    wrapHeight,
    wrapCursor,
    wrapBackground,
    wrapMargin,
    wrapPadding,
  } = props

  const styleProps = {
    backgroundImageUrl,
    wrapWidth,
    wrapHeight,
    wrapCursor,
    wrapBackground,
    wrapMargin,
    wrapPadding,
  }

  return <WrapperStyles.Section {...styleProps} />
}

export default Wrapper

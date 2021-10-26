/* eslint-disable react/require-default-props */
import React from 'react'
import { IWrapperProps } from '../../interfaces/ICommon'
import { WrapperStyles } from './Wrapper.styles'

const Wrapper: React.FC<IWrapperProps> = (props) => {
  const {
    bgImageUrl,
    wrapWidth,
    wrapHeight,
    wrapCursor,
    wrapBackground,
    wrapMargin,
    wrapPadding,
  } = props

  const styleProps = {
    bgImageUrl,
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

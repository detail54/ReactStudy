import React from 'react'
import { DefaultTheme, ThemedCssFunction } from 'styled-components'
import { ListItemStyles } from './ListItem.styles'

type Size = 'small' | 'medium' | 'large'
type Align = 'left' | 'center' | 'right'

export interface IProps {
  item: string
  width?: string
  background?: string
  fontSize?: string
  size?: Size
  align?: Align
  margin?: string
  style?: ThemedCssFunction<DefaultTheme>
}

const listItem: React.FC<IProps> = (props) => {
  const {
    item,
    width = '',
    background = '',
    fontSize = '',
    size = '',
    align = '',
    margin = '',
  } = props

  const styleProps = {
    width,
    background,
    fontSize,
    size,
    align,
    margin,
  }

  return <ListItemStyles.Div {...styleProps}>{item}</ListItemStyles.Div>
}

export default listItem

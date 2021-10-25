import React from 'react'
import { ListItemStyles } from './ListItem.styles'

type Size = 'small' | 'medium' | 'large'
type Align = 'left' | 'center' | 'right'

export interface IProps {
  width?: string
  color?: string
  background?: string
  fontSize?: string
  size?: Size
  align?: Align
  margin?: string
  padding?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any // 인라인 스타일 적용을 위한 props. 사용 지양
  item: string
  onClick?: () => void
}

const listItem: React.FC<IProps> = (props) => {
  const {
    width = '',
    color = '',
    background = '',
    fontSize = '',
    size = '',
    align = '',
    margin = '',
    padding = '',
    style = {},
    item,
    onClick,
  } = props

  const styleProps = {
    width,
    color,
    background,
    fontSize,
    size,
    align,
    margin,
    padding,
    style,
    onClick,
  }

  return <ListItemStyles.Div {...styleProps}>{item}</ListItemStyles.Div>
}

export default listItem

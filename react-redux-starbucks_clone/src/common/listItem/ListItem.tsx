import React from 'react'
import { ListItemStyles } from './ListItem.styles'

type Size = 'small' | 'medium' | 'large'
type Align = 'left' | 'center' | 'right'

interface IProps {
  width?: string
  height?: string
  color?: string
  background?: string
  fontSize?: string
  fontWeight?: string
  size?: Size
  align?: Align
  margin?: string
  padding?: string
  alignItems?: string
  cursor?: string
  hoverColor?: string
  hoverBgColor?: string
  hoverTextDeco?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any // 인라인 스타일 적용을 위한 props. 사용 지양
  item: string
  onClick?: () => void
}

const listItem: React.FC<IProps> = (props) => {
  const {
    width,
    height,
    color,
    background,
    fontSize,
    fontWeight,
    size,
    align,
    margin,
    padding,
    alignItems,
    cursor,
    hoverColor,
    hoverBgColor,
    hoverTextDeco,
    style = {},
    item,
    onClick,
  } = props

  const styleProps = {
    width,
    height,
    color,
    background,
    fontSize,
    fontWeight,
    size,
    align,
    margin,
    padding,
    alignItems,
    cursor,
    hoverColor,
    hoverBgColor,
    hoverTextDeco,
    style,
    onClick,
  }

  return <ListItemStyles.Div {...styleProps}>{item}</ListItemStyles.Div>
}

export default listItem

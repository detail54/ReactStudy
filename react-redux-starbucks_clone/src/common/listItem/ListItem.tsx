import React from 'react'
import { ListItemStyles } from './ListItem.styles'

type Size = 'small' | 'medium' | 'large'
type Align = 'left' | 'center' | 'right'

interface IProps {
  itemWidth?: string | undefined
  itemHeight?: string | undefined
  itemFontColor?: string | undefined
  itemBackground?: string | undefined
  itemFontSize?: string | undefined
  itemFontWeight?: string | undefined
  size?: Size | undefined
  align?: Align | undefined
  margin?: string | undefined
  padding?: string | undefined
  alignItems?: string | undefined
  itemCursor?: string | undefined
  hoverColor?: string | undefined
  hoverBgColor?: string | undefined
  hoverTextDeco?: string | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any // 인라인 스타일 적용을 위한 props. 사용 지양
  item: string | undefined
  onClick?: () => void | undefined
}

const listItem: React.FC<IProps> = (props) => {
  const {
    itemWidth,
    itemHeight,
    itemFontColor,
    itemBackground,
    itemFontSize,
    itemFontWeight,
    size,
    align,
    margin,
    padding,
    alignItems,
    itemCursor,
    hoverColor,
    hoverBgColor,
    hoverTextDeco,
    style = {},
    item,
    onClick,
  } = props

  const styleProps = {
    itemWidth,
    itemHeight,
    itemFontColor,
    itemBackground,
    itemFontSize,
    itemFontWeight,
    size,
    align,
    margin,
    padding,
    alignItems,
    itemCursor,
    hoverColor,
    hoverBgColor,
    hoverTextDeco,
    style,
    onClick,
  }

  return <ListItemStyles.Div {...styleProps}>{item}</ListItemStyles.Div>
}

export default listItem

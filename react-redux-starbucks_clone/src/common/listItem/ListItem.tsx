import React from 'react'
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any // 인라인 스타일 적용을 위한 props. 사용 지양
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
    style = {},
  } = props

  const styleProps = {
    width,
    background,
    fontSize,
    size,
    align,
    margin,
    style,
  }

  return <ListItemStyles.Div {...styleProps}>{item}</ListItemStyles.Div>
}

export default listItem

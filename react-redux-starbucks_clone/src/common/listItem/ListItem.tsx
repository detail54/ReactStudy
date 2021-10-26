import React from 'react'
import { IListItemProps } from '../../interfaces/ICommons'
import { ListItemStyles } from './ListItem.styles'

const listItem: React.FC<IListItemProps> = (props) => {
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

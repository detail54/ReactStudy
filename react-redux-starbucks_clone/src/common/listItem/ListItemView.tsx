import React from 'react'
import { ListItemStyles } from './ListItem.styles'

interface IProps {
  item: string
}

const listItemView: React.FC<IProps> = (props) => {
  const { item } = props

  return <ListItemStyles.Div>{item}</ListItemStyles.Div>
}

export default listItemView

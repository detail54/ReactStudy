import React from 'react'
import ListItemView from './ListItemView'

interface IProps {
  item: string
}

const listItem: React.FC<IProps> = (props) => {
  const { item } = props

  return <ListItemView item={item} />
}

export default listItem

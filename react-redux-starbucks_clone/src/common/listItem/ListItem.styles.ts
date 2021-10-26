import styled, { css } from 'styled-components'
import { IListItemProps } from '../../interfaces/ICommon'

interface IProps {
  itemWidth?: string
  itemHeight?: string
  itemFontColor?: string
  itemBackground?: string
  itemFontSize?: string
  itemFontWeight?: string
  size?: string
  align?: string
  margin?: string
  padding?: string
  alignItems?: string
  itemCursor?: string
  hoverColor?: string
  hoverBgColor?: string
  hoverTextDeco?: string
}

const Div = styled.div`
  ${(props: IProps) =>
    (props.size === 'small' &&
      css`
        width: 100px;
        height: 30px;
      `) ||
    (props.size === 'medium' &&
      css`
        width: 150px;
        height: 40px;
      `) ||
    (props.size === 'large' &&
      css`
        width: 200px;
        height: 50px;
      `)}

  ${(props: IProps) =>
    props.align &&
    css`
      display: flex;
      justify-content: ${props.align || 'center'};
      align-items: ${props.alignItems || 'center'};
    `}

  width: ${(props: IListItemProps) => props.itemWidth || ''};
  height: ${(props: IListItemProps) => props.itemHeight || ''};
  color: ${(props: IListItemProps) => props.itemFontColor || ''};
  background: ${(props: IListItemProps) => props.itemBackground || ''};
  font-size: ${(props: IListItemProps) => props.itemFontSize || ''};
  font-weight: ${(props: IListItemProps) => props.itemFontWeight || ''};
  margin: ${(props: IListItemProps) => props.margin || ''};
  padding: ${(props: IListItemProps) => props.padding || ''};
  cursor: ${(props: IListItemProps) => props.itemCursor || ''};

  &:hover {
    color: ${(props: IListItemProps) => props.hoverColor || ''};
    background: ${(props: IListItemProps) => props.hoverBgColor || ''};
    text-decoration: ${(props: IListItemProps) => props.hoverTextDeco || ''};
  }
`

export const ListItemStyles = {
  Div,
}

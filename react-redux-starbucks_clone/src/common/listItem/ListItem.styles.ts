import styled, { css } from 'styled-components'

interface IProps {
  itemWidth?: string | undefined
  itemHeight?: string | undefined
  itemFontColor?: string | undefined
  itemBackground?: string | undefined
  itemFontSize?: string | undefined
  itemFontWeight?: string | undefined
  size?: string | undefined
  align?: string | undefined
  margin?: string | undefined
  padding?: string | undefined
  alignItems?: string | undefined
  itemCursor?: string | undefined
  hoverColor?: string | undefined
  hoverBgColor?: string | undefined
  hoverTextDeco?: string | undefined
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

  width: ${(props: IProps) => props.itemWidth || ''};
  height: ${(props: IProps) => props.itemHeight || ''};
  color: ${(props: IProps) => props.itemFontColor || ''};
  background: ${(props: IProps) => props.itemBackground || ''};
  font-size: ${(props: IProps) => props.itemFontSize || ''};
  font-weight: ${(props: IProps) => props.itemFontWeight || ''};
  margin: ${(props: IProps) => props.margin || ''};
  padding: ${(props: IProps) => props.padding || ''};
  cursor: ${(props: IProps) => props.itemCursor || ''};

  &:hover {
    color: ${(props: IProps) => props.hoverColor || ''};
    background: ${(props: IProps) => props.hoverBgColor || ''};
    text-decoration: ${(props: IProps) => props.hoverTextDeco || ''};
  }
`

export const ListItemStyles = {
  Div,
}

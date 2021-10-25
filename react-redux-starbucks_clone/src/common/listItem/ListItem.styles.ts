import styled, { css } from 'styled-components'

interface IProps {
  width?: string
  height?: string
  color?: string
  background?: string
  fontSize?: string
  fontWeight?: string
  size?: string
  align?: string
  margin?: string
  padding?: string
  alignItems?: string
  cursor?: string
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

  width: ${(props: IProps) => props.width || ''};
  height: ${(props: IProps) => props.height || ''};
  color: ${(props: IProps) => props.color || ''};
  background: ${(props: IProps) => props.background || ''};
  font-size: ${(props: IProps) => props.fontSize || ''};
  margin: ${(props: IProps) => props.margin || ''};
  padding: ${(props: IProps) => props.padding || ''};
  cursor: ${(props: IProps) => props.cursor || ''};
  font-weight: ${(props: IProps) => props.fontWeight || ''};
  font-weight: lighter;

  &:hover {
    color: ${(props: IProps) => props.hoverColor || ''};
    background: ${(props: IProps) => props.hoverBgColor || ''};
    text-decoration: ${(props: IProps) => props.hoverTextDeco || ''};
  }
`

export const ListItemStyles = {
  Div,
}

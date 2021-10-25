import styled, { css } from 'styled-components'

export interface IProps {
  width?: string
  color?: string
  background?: string
  fontSize?: string
  size?: string
  align?: string
  margin?: string
  padding?: string
}

const Div = styled.div`
  width: ${(props: IProps) => props.width || '200px'};
  color: ${(props: IProps) => props.color || 'black'};
  background: ${(props: IProps) => props.background || 'white'};
  font-size: ${(props: IProps) => props.fontSize || '0px'};
  margin: ${(props: IProps) => props.margin || '0px'};
  padding: ${(props: IProps) => props.padding || '0px'};

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
    (props.align === 'left' &&
      css`
        display: flex;
        justify-content: left;
        align-items: center;
      `) ||
    (props.align === 'center' &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
      `) ||
    (props.align === 'right' &&
      css`
        display: flex;
        justify-content: center;
        align-items: right;
      `)}
`

export const ListItemStyles = {
  Div,
}

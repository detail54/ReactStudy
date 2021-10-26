import styled, { css } from 'styled-components'
import { IButtonProps } from '../../interfaces/ICommons'

const Button = styled.div`
  ${(props: IButtonProps) =>
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

  ${(props: IButtonProps) =>
    props.align &&
    css`
      display: flex;
      justify-content: ${props.align || 'center'};
      align-items: ${props.alignItems || 'center'};
    `}

  border: ${(props: IButtonProps) => props.btborder || ''};
  width: ${(props: IButtonProps) => props.btWidth || ''};
  height: ${(props: IButtonProps) => props.btHeight || ''};
  color: ${(props: IButtonProps) => props.btFontColor || ''};
  background: ${(props: IButtonProps) => props.btBackground || ''};
  font-size: ${(props: IButtonProps) => props.btFontSize || ''};
  font-weight: ${(props: IButtonProps) => props.btFontWeight || ''};
  margin: ${(props: IButtonProps) => props.margin || ''};
  padding: ${(props: IButtonProps) => props.padding || ''};
  cursor: ${(props: IButtonProps) => props.btCursor || ''};

  &:hover {
    border: ${(props: IButtonProps) => props.hoverBorder || ''};
    color: ${(props: IButtonProps) => props.hoverColor || ''};
    background: ${(props: IButtonProps) => props.hoverBgColor || ''};
    text-decoration: ${(props: IButtonProps) => props.hoverTextDeco || ''};
  }
`

export const ButtonStyles = {
  Button,
}

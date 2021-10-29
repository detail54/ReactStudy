import styled from 'styled-components'
import { IWrapperProps } from '../../interfaces/ICommons'

const Section = styled.section`
  background-color: ${(props: IWrapperProps) => props.bgColor || ''};
  background-image: url(${(props: IWrapperProps) => props.bgImageUrl || ''});
  background-position: ${(props: IWrapperProps) => props.bgPosition || ''};
  background-repeat: ${(props: IWrapperProps) => props.bgRepeat || ''};
  background-size: ${(props: IWrapperProps) => props.bgSize || ''};
  height: ${(props: IWrapperProps) => props.wrapHeight || ''};
  width: ${(props: IWrapperProps) => props.wrapWidth || ''};
  cursor: ${(props: IWrapperProps) => props.wrapCursor || ''};
  margin: ${(props: IWrapperProps) => props.wrapMargin || ''};
  padding: ${(props: IWrapperProps) => props.wrapPadding || ''};
`

export const WrapperStyles = {
  Section,
}

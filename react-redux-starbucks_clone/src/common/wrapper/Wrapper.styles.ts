import styled from 'styled-components'
import { IWrapperProps } from '../../interfaces/ICommon'

const Section = styled.section`
  background-image: url(${(props: IWrapperProps) => props.bgImageUrl || ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${(props: IWrapperProps) => props.wrapHeight || ''};
  width: ${(props: IWrapperProps) => props.wrapWidth || ''};
  cursor: ${(props: IWrapperProps) => props.wrapCursor || ''};
  margin: ${(props: IWrapperProps) => props.wrapMargin || ''};
  padding: ${(props: IWrapperProps) => props.wrapPadding || ''};
`

export const WrapperStyles = {
  Section,
}

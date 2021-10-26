import styled from 'styled-components'

interface IProps {
  backgroundImageUrl?: string
  wrapWidth?: string
  wrapHeight?: string
  wrapCursor?: string
  wrapBackground?: string
  wrapMargin?: string
  wrapPadding?: string
}

const Section = styled.section`
  background-image: url(${(props: IProps) => props.backgroundImageUrl || ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${(props: IProps) => props.wrapHeight || ''};
  width: ${(props: IProps) => props.wrapWidth || ''};
  cursor: ${(props: IProps) => props.wrapCursor || ''};
  margin: ${(props: IProps) => props.wrapMargin || ''};
  padding: ${(props: IProps) => props.wrapPadding || ''};
`

export const WrapperStyles = {
  Section,
}

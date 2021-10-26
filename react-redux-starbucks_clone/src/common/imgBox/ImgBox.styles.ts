import styled from 'styled-components'
import { IImgBoxProps } from '../../interfaces/ICommons'

const Div = styled.div`
  background-image: ${(props: IImgBoxProps) => props.bgImgUrl || ''};
  background-size: ${(props: IImgBoxProps) => props.bgImgSize || ''};
  background-position: ${(props: IImgBoxProps) => props.bgImgPosition || ''};
  background-repeat: ${(props: IImgBoxProps) => props.bgImgRepeat || ''};
  width: ${(props: IImgBoxProps) => props.boxWidth || ''};
  height: ${(props: IImgBoxProps) => props.boxHeight || ''};
  z-index: ${(props: IImgBoxProps) => props.zIndex || 0};
`

export const ImgBoxStyles = {
  Div,
}

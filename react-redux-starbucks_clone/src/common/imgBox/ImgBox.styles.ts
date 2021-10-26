import styled from 'styled-components'
import { IImgBoxProps } from '../../interfaces/ICommons'

const Img = styled.img`
  width: ${(props: IImgBoxProps) => props.boxWidth || ''};
  height: ${(props: IImgBoxProps) => props.boxHeight || ''};
  z-index: ${(props: IImgBoxProps) => props.zIndex || 0};
`

export const ImgBoxStyles = {
  Img,
}

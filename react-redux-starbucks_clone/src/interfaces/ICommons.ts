type Size = 'small' | 'medium' | 'large'
type Align = 'left' | 'center' | 'right'

export interface IListItemProps {
  itemWidth?: string
  itemHeight?: string
  itemFontColor?: string
  itemBackground?: string
  itemFontSize?: string
  itemFontWeight?: string
  size?: Size
  align?: Align
  margin?: string
  padding?: string
  alignItems?: string
  itemCursor?: string
  hoverColor?: string
  hoverBgColor?: string
  hoverTextDeco?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any // 인라인 스타일 적용을 위한 props. 사용 지양
  item?: string
  onClick?: () => void
}

export interface IWrapperProps {
  bgImageUrl?: string
  wrapWidth?: string
  wrapHeight?: string
  wrapCursor?: string
  wrapBackground?: string
  wrapMargin?: string
  wrapPadding?: string
}

export interface IImgBoxProps {
  alt: string
  imgUrl: string
  zIndex?: number
  boxWidth?: string
  boxHeight?: string
  boxDisplay?: string
  boxJustify?: string
  boxAlignItems?: string
  boxAlignSelf?: string
  boxPosition?: string
  boxTop?: string
  boxBottom?: string
  boxLeft?: string
  boxRight?: string
}

export interface IButtonProps {
  btborder?: string
  btborderRadius?: string
  btWidth?: string
  btHeight?: string
  btFontColor?: string
  btBackground?: string
  btFontSize?: string
  btFontWeight?: string
  size?: Size
  align?: Align
  margin?: string
  padding?: string
  alignItems?: string
  btCursor?: string
  hoverBorder?: string
  hoverColor?: string
  hoverBgColor?: string
  hoverTextDeco?: string
  btTransition?: string
  btPosition?: string
  btTop?: string
  btBottom?: string
  btLeft?: string
  btRight?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any // 인라인 스타일 적용을 위한 props. 사용 지양
  text?: string
  onClick?: () => void
}

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

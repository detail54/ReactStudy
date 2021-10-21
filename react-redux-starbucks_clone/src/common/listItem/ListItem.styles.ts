import styled from 'styled-components'

interface IProps {
  width?: string
  background?: string
}

const Div = styled.div`
  width: ${(props: IProps) => (props.width ? props.width : '200px')};
  background: ${(props: IProps) =>
    props.background ? props.background : 'white'};
`

export const ListItemStyles = {
  Div,
}

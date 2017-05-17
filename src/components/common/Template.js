import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex: ${props => props.long !== undefined ? props.long : 1} !important;
`

export const Col = styled.div`
  display: flex;
  flex-flow: column;
  flex: ${props => props.long !== undefined ? props.long : 1};
`

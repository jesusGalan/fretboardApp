import styled from 'styled-components'

export const TransparentDiv = styled.div`
  text-align: center
  border-top: none
  border-bottom: none
  border-right: solid
  border-right-color: white;
  border-right-width: ${props => props.number === '0' ? '20' : '3'}px;
  width: ${props => props.number === '0' ? '70' : (52 - parseInt(props.number, 10)).toString()}px;
  height: 20px;
  user-select: none;
`
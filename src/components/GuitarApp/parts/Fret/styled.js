import styled from 'styled-components'

export const BorderedDiv = styled.div`
  text-align: center
  border-top: none
  border-bottom: none
  border-right: solid
  border-right-color: ${props => props.number === '0' ? '#E6E68A' : '#9E9E97'}
  border-right-width: ${props => props.number === '0' ? '20' : '3'}px;
  width: ${props => props.number === '0' ? '70' : (52 - parseInt(props.number, 10)).toString()}px;
`
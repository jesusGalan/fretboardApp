import styled from 'styled-components'


export const CircleButton = styled.button`
  width: 30px;
  height: 30px;
  color: black;
  border-radius: 50%;
  user-select: none;
  font-size: 11px
  background-color: ${props => props.color};
`

export const NoteEnclosure = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 5px 0 0 0;
`

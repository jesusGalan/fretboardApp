import styled from 'styled-components'

export const MainBox = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
  //this Width prevent for resizing when display is coming smaller
  width: 1px;
`

export const Title = styled.h1`
  flex: 1;
  text-align: center;
  margin: 10px;
`

export const FlexButton = styled.button`
  flex: 1;
`

export const FlexInput = styled.input`
  flex: 1 !important;
`
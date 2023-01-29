import styled from 'styled-components'

export const BgContainerStyle = styled.div`
  height: ${props => (props.showResult ? '100vh' : '')};
  background-color: #223a5f;
  padding: 5px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Bree Serif;

  @media (max-width: 767px) {
    height: 100vh;
  }
`

export const RulesPopUpContainer = styled.div`
  align-self: flex-end;
  margin: 5px;
`

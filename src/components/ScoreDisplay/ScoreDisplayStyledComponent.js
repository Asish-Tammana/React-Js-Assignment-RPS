import styled from 'styled-components'

export const TopContainer = styled.div`
  border: 2px solid #ffffff;
  padding: 3px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px;
  margin-top: 20px;
  width: 70%;
  border-radius: 10px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    width: 90%;
    margin: 5px;
    padding: 5px;
  }
`

export const ScoreContainer = styled.div`
  background-color: #fff;
  padding: 3px;
  color: #223a5f;
  text-align: center;
  width: 150px;
  height: 90%;
  border-radius: 10px;
  font-weight: bold;

  @media (max-width: 767px) {
    padding: 0px;
    line-height: 0.5;

    width: 100px;
  }
`
export const Score = styled.p`
  font-family: 'Roboto';
`

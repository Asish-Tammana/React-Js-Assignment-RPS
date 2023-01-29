/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const GameContainer = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    width: 90%;
    justify-content: space-around;
    padding: 0px;
  }
`

export const ItemButton = styled.button`
  background-color: transparent;
  border: 0px;
  margin: 20px;
  width: 40%;
  cursor: pointer;
  @media (max-width: 767px) {
    margin: 0px;
    width: ;
  }
`

export const ChoiceImage = styled.img`
  height: 160px;
  width: 160px;
  @media (max-width: 767px) {
    height: 120px;
    width: 120px;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  @media (max-width: 767px) {
    width: 90%;
    justify-content: space-around;
    padding: 5px;
  }
`
export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const ChoiceItemContainer = styled.div`
  text-align: center;
`

export const PlayAgainButton = styled.button`
  background-color: #fff;
  color: #223a5f;
  font-family: Bree Serif;
  border: 0px;
  border-radius: 5px;
  padding: 10px;
  width: 70px;
  cursor: pointer;
  width: 120px;
`

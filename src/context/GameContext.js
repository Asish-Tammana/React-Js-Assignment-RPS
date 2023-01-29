import React from 'react'

const GameContext = React.createContext({
  choicesList: [],
  score: 0,
  showResult: false,
  currentSelected: undefined,
  opponentChoice: undefined,
  resultStatement: '',
  incrementScore: () => {},
  decrementScore: () => {},
  toggleDisplay: () => {},
  updateCurrentSelected: () => {},
  updateResultStatement: () => {},
})

export default GameContext

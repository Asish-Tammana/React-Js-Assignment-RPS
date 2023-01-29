import {Component} from 'react'
import ScoreDisplay from '../ScoreDisplay'
import RockPaperScissors from '../RockPaperScissors'
import RulesPopUp from '../RulesPopUp'
import GameContext from '../../context/GameContext'
import {
  BgContainerStyle,
  RulesPopUpContainer,
} from './BgContainerStyledComponent'

class BgContainer extends Component {
  state = {
    score: 0,
    showResult: false,
    currentSelected: undefined,
    opponentChoiceSelected: undefined,
    resultStatement: '',
  }

  incrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
    }))
  }

  decrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score - 1,
    }))
  }

  toggleDisplay = () => {
    this.setState(prevState => ({
      showResult: !prevState.showResult,
      currentSelected: undefined,
    }))
  }

  updateCurrentSelected = (selectedOption, opponentChoice) => {
    this.setState({
      currentSelected: selectedOption,
      opponentChoiceSelected: opponentChoice,
    })
  }

  updateResultStatement = resultStatement => {
    this.setState({
      resultStatement,
    })
  }

  render() {
    const {choicesList} = this.props
    const {
      score,
      showResult,
      currentSelected,
      opponentChoiceSelected,
      resultStatement,
    } = this.state

    return (
      <GameContext.Provider
        value={{
          choicesList,
          score,
          showResult,
          currentSelected,
          opponentChoiceSelected,
          resultStatement,
          incrementScore: this.incrementScore,
          decrementScore: this.decrementScore,
          toggleDisplay: this.toggleDisplay,
          updateCurrentSelected: this.updateCurrentSelected,
          updateResultStatement: this.updateResultStatement,
        }}
      >
        <BgContainerStyle showResult={showResult}>
          <ScoreDisplay />
          <RockPaperScissors />
          <RulesPopUpContainer>
            <RulesPopUp />
          </RulesPopUpContainer>
        </BgContainerStyle>
      </GameContext.Provider>
    )
  }
}

export default BgContainer

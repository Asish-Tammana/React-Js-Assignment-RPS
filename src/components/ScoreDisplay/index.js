import {Component} from 'react'
import {
  TopContainer,
  ScoreContainer,
  Score,
} from './ScoreDisplayStyledComponent'
import GameContext from '../../context/GameContext'

class ScoreDisplay extends Component {
  render() {
    return (
      <GameContext.Consumer>
        {value => {
          const {score} = value
          return (
            <TopContainer>
              <div>
                Rock
                <br />
                Paper
                <br />
                Scissors
              </div>
              <ScoreContainer>
                <p>Score</p>
                <Score>{score}</Score>
              </ScoreContainer>
            </TopContainer>
          )
        }}
      </GameContext.Consumer>
    )
  }
}
export default ScoreDisplay

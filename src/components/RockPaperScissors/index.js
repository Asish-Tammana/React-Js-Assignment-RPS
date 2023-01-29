import {Component} from 'react'
import GameContext from '../../context/GameContext'
import {
  GameContainer,
  ItemButton,
  ChoiceImage,
  ResultContainer,
  ChoicesContainer,
  ChoiceItemContainer,
  PlayAgainButton,
} from './RockPaperScissorsStyledComponent'

class RockPaperScissors extends Component {
  render() {
    return (
      <GameContext.Consumer>
        {value => {
          const {
            choicesList,
            showResult,
            currentSelected,
            opponentChoiceSelected,
            resultStatement,
            incrementScore,
            decrementScore,
            toggleDisplay,
            updateCurrentSelected,
            updateResultStatement,
          } = value

          const choiceIDs = {
            rockId: 'ROCK',
            paperId: 'PAPER',
            scissorsId: 'SCISSORS',
          }

          const playAgain = () => {
            toggleDisplay()
          }

          const choiceSelected = selectedOption => {
            const opponentChoiceIndex = Math.floor((Math.random() * 10) % 3)
            const opponentChoice = choicesList[opponentChoiceIndex]

            toggleDisplay()
            updateCurrentSelected(selectedOption, opponentChoice)

            const selectedId = selectedOption.id
            const opponentId = opponentChoice.id

            const winStatement = 'YOU WON'
            const loseStatement = 'YOU LOSE'
            const drawStatement = 'IT IS DRAW'

            if (
              selectedId === choiceIDs.rockId &&
              opponentId === choiceIDs.scissorsId
            ) {
              incrementScore()
              updateResultStatement(winStatement)
            } else if (
              selectedId === choiceIDs.rockId &&
              opponentId === choiceIDs.paperId
            ) {
              decrementScore()
              updateResultStatement(loseStatement)
            } else if (
              selectedId === choiceIDs.rockId &&
              opponentId === choiceIDs.rockId
            ) {
              updateResultStatement(drawStatement)
            } else if (
              selectedId === choiceIDs.paperId &&
              opponentId === choiceIDs.rockId
            ) {
              incrementScore()
              updateResultStatement(winStatement)
            } else if (
              selectedId === choiceIDs.paperId &&
              opponentId === choiceIDs.scissorsId
            ) {
              decrementScore()
              updateResultStatement(loseStatement)
            } else if (
              selectedId === choiceIDs.paperId &&
              opponentId === choiceIDs.paperId
            ) {
              updateResultStatement(drawStatement)
            } else if (
              selectedId === choiceIDs.scissorsId &&
              opponentId === choiceIDs.paperId
            ) {
              incrementScore()
              updateResultStatement(winStatement)
            } else if (
              selectedId === choiceIDs.scissorsId &&
              opponentId === choiceIDs.rockId
            ) {
              decrementScore()
              updateResultStatement(loseStatement)
            } else if (
              selectedId === choiceIDs.scissorsId &&
              opponentId === choiceIDs.scissorsId
            ) {
              updateResultStatement(drawStatement)
            }
          }

          return (
            <>
              {showResult ? (
                <ResultContainer>
                  <ChoicesContainer>
                    <ChoiceItemContainer>
                      <h1>YOU</h1>
                      <ChoiceImage
                        src={currentSelected.imageUrl}
                        alt="your choice"
                      />
                    </ChoiceItemContainer>
                    <ChoiceItemContainer>
                      <h1>OPPONENT</h1>
                      <ChoiceImage
                        src={opponentChoiceSelected.imageUrl}
                        alt="opponent choice"
                      />
                    </ChoiceItemContainer>
                  </ChoicesContainer>
                  <p>{resultStatement}</p>

                  <PlayAgainButton type="button" onClick={playAgain}>
                    PLAY AGAIN
                  </PlayAgainButton>
                </ResultContainer>
              ) : (
                <GameContainer>
                  <ItemButton
                    data-testid="rockButton"
                    type="button"
                    key={choicesList[0].id}
                    onClick={() => choiceSelected(choicesList[0])}
                  >
                    <ChoiceImage
                      src={choicesList[0].imageUrl}
                      alt={choicesList[0].id}
                    />
                  </ItemButton>
                  <ItemButton
                    data-testid="scissorsButton"
                    type="button"
                    key={choicesList[1].id}
                    onClick={() => choiceSelected(choicesList[1])}
                  >
                    <ChoiceImage
                      src={choicesList[1].imageUrl}
                      alt={choicesList[1].id}
                    />
                  </ItemButton>
                  <ItemButton
                    data-testid="paperButton"
                    type="button"
                    key={choicesList[2].id}
                    onClick={() => choiceSelected(choicesList[2])}
                  >
                    <ChoiceImage
                      src={choicesList[2].imageUrl}
                      alt={choicesList[2].id}
                    />
                  </ItemButton>
                </GameContainer>
              )}
            </>
          )
        }}
      </GameContext.Consumer>
    )
  }
}

export default RockPaperScissors

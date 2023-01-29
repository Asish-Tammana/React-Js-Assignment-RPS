import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  RulesContainer,
  RulesImage,
  RulesButton,
} from './RulesPopUpStyledComponent'

class RulesPopUp extends Component {
  render() {
    return (
      <Popup
        modal
        trigger={
          <RulesButton type="button" className="trigger-button">
            Rules
          </RulesButton>
        }
      >
        {close => (
          <>
            <RulesContainer>
              <button type="button" onClick={() => close()}>
                <RiCloseLine />
              </button>

              <br />
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </RulesContainer>
          </>
        )}
      </Popup>
    )
  }
}
export default RulesPopUp

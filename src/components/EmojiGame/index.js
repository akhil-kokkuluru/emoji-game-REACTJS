import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {gameInprogress: true, clickedEmojis: [], topScore: ''}

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffeledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="EmojisContainer">
        {shuffeledEmojisList.map(item => (
          <EmojiCard emojiDetails={item} />
        ))}
      </ul>
    )
  }

  render() {
    const {emojisList} = this.props
    const {gameInprogress} = this.state
    return (
      <div className="totalBG">
        <NavBar />
        <div className="gameBody">
          {gameInprogress ? this.renderEmojiList() : ''}
        </div>
      </div>
    )
  }
}

export default EmojiGame

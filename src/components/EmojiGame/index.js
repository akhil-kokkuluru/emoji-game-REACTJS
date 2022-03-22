import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    gameInprogress: true,
    clickedEmojis: [],
    topScore: 0,
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiClicked = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isEmojiPresent = clickedEmojis.includes(id)

    if (isEmojiPresent) {
      this.setState({gameInprogress: false})
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        this.setState({
          gameInprogress: false,
        })
      }
      this.setState(prevstate => ({
        clickedEmojis: [...prevstate.clickedEmojis, id],
      }))
    }
  }

  renderEmojiList = () => {
    const shuffeledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="EmojisContainer">
        {shuffeledEmojisList.map(item => (
          <EmojiCard
            key={item.id}
            emojiDetails={item}
            emojiClicked={this.emojiClicked}
          />
        ))}
      </ul>
    )
  }

  againPlay = () => {
    const {clickedEmojis, topScore} = this.state
    if (clickedEmojis.length > topScore) {
      this.setState({
        gameInprogress: true,
        topScore: clickedEmojis.length,
        clickedEmojis: [],
      })
    }
    this.setState({gameInprogress: true, clickedEmojis: []})
  }

  WinOrLoseCard = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    return (
      <WinOrLoseCard
        againPlay={this.againPlay}
        score={clickedEmojis.length}
        emojisList={emojisList}
      />
    )
  }

  render() {
    const {gameInprogress, clickedEmojis, topScore} = this.state
    return (
      <div className="totalBG">
        <NavBar
          score={clickedEmojis.length}
          topscoreVal={topScore}
          gameInprogress={gameInprogress}
        />
        <div className="gameBody">
          {gameInprogress ? this.renderEmojiList() : this.WinOrLoseCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame

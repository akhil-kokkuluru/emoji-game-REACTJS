import './index.css'

const WinOrLoseCard = props => {
  const {againPlay, score, emojisList} = props
  const playingAgain = () => {
    againPlay()
  }
  let imgUrl
  let msg
  let scoreString
  if (score === emojisList.length) {
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    msg = 'You Won'
    scoreString = 'Best Score'
  } else {
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    msg = 'You Lose'
    scoreString = 'Score'
  }

  return (
    <div className="totalContainer">
      <img className="imageCss" alt="win or lose" src={imgUrl} />
      <div>
        <h1 className="wontext">{msg}</h1>
        <p className="bestCss">{scoreString}</p>
        <p className="scorecss">{score}/12</p>
        <button className="buttoncss" type="button" onClick={playingAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard

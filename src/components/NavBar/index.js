import './index.css'

const NavBar = props => {
  const {score, topscoreVal, gameInprogress} = props
  return (
    <nav className="navbarContainer">
      <div className="logoTextContainer">
        <img
          alt="emoji logo"
          className="imgCSS"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="gameTitle">Emoji Game</h1>
      </div>

      {gameInprogress && (
        <div className="scoresContainer">
          <p className="score">Score: {score}</p>
          <p className="topScore">Top Score: {topscoreVal}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar

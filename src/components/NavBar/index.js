import './index.css'

const NavBar = () => (
  <nav className="navbarContainer">
    <div className="logoTextContainer">
      <img
        alt="emoji logo"
        className="imgCSS"
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
      />
      <p className="gameTitle">Emoji Game</p>
    </div>
    <div className="scoresContainer">
      <p className="score">Score: 0</p>
      <p className="topScore">Top Score: 0</p>
    </div>
  </nav>
)
export default NavBar

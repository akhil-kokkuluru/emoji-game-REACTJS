import './index.css'

const EmojiCard = props => {
  const {emojiDetails} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  return (
    <li>
      <button className="buttonContainer">
        <img className="imgcss" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}
export default EmojiCard

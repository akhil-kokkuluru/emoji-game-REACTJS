import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClicked} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onEmojiClick = () => {
    emojiClicked(id)
  }
  return (
    <li>
      <button className="buttonContainer" type="button" onClick={onEmojiClick}>
        <img className="imgcss" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}
export default EmojiCard

// Write your code here
import './index.css'

const TabItem = props => {
  const {item, getItems} = props
  const {tabId, displayText} = item

  const getItem = () => {
    getItems(tabId)
  }
  return (
    <li>
      <button type="button" onClick={getItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

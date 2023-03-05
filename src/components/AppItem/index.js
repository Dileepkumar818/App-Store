// Write your code here
import './index.css'

const AppItem = props => {
  const {items} = props
  const {appName, imageUrl} = items

  return (
    <li className="list">
      <img src={imageUrl} alt={appName} className="image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem

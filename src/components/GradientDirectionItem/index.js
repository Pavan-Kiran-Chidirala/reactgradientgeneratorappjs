// Write your code here
import {ListItem, ButtonItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientItem, onClickButton, activeTab} = props
  const {value, displayText} = gradientItem
  const buttonClick = () => onClickButton(value)
  const isTrue = activeTab === value
  return (
    <ListItem>
      <ButtonItem
        as="button"
        type="button"
        onClick={buttonClick}
        isTrue={isTrue}
      >
        {displayText}
      </ButtonItem>
    </ListItem>
  )
}

export default GradientDirectionItem

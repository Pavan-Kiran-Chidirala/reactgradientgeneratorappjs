import {Component} from 'react'

import {
  MainContainer,
  MainHeading,
  ChooseDirection,
  GradientDirectionItemList,
  PickColors,
  InputContainer,
  InputHolder,
  LabelElement,
  InputElement,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeTab: gradientDirectionsList[0].value,
    input1: '#8ae323',
    input2: '#014f7b',
    bgColor1: '#8ae323',
    bgColor2: '#014f7b',
  }

  input1Change = e => this.setState({input1: e.target.value})

  input2Change = e => this.setState({input2: e.target.value})

  generateColor = () => {
    const {input1, input2} = this.state
    this.setState({bgColor1: input1, bgColor2: input2})
  }

  onClickButton = value => this.setState({activeTab: value})

  render() {
    const {activeTab, input1, input2, bgColor1, bgColor2} = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        linearGradient={`to ${activeTab}, ${bgColor1}, ${bgColor2}`}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <ChooseDirection>Choose Direction</ChooseDirection>
        <GradientDirectionItemList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              gradientItem={eachItem}
              activeTab={activeTab}
              onClickButton={this.onClickButton}
            />
          ))}
        </GradientDirectionItemList>
        <PickColors>Pick the Colors</PickColors>
        <InputContainer>
          <InputHolder>
            <LabelElement>{input1}</LabelElement>
            <InputElement
              type="color"
              value={input1}
              id="input1"
              onChange={this.input1Change}
            />
          </InputHolder>
          <InputHolder>
            <LabelElement>{input2}</LabelElement>
            <InputElement
              type="color"
              value={input2}
              id="input2"
              onChange={this.input2Change}
            />
          </InputHolder>
        </InputContainer>
        <GenerateButton type="button" onClick={this.generateColor}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator

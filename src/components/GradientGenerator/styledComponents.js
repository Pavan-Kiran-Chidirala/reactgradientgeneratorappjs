// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(${props => props.linearGradient});
`
export const MainHeading = styled.h1`
  color: #ededed;
  font-size: 25px;
  text-align: center;
`
export const ChooseDirection = styled.p`
  color: #ffffff79;
  font-size: 20px;
`
export const GradientDirectionItemList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0px;
  width: 100%;
`
export const PickColors = styled(ChooseDirection)`
  font-size: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 16%;
  margin-left: 2%;
  margin-bottom: 20px;
`
export const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`

export const LabelElement = styled.p`
  color: #ffffff79;
  font-size: 16px;
  text-align: center;
`

export const InputElement = styled.input`
  width: 80px;
  height: 35px;
  border-style: none;
  text-align: center;
  padding: 0px;
  background-color: transparent;
`
export const GenerateButton = styled.button`
  width: 80px;
  height: 35px;
  background-color: #00c9b7;
  color: #334155;
  font-size: 12px;
  text-align: center;
  border-style: none;
  outline: none;
  border-radius: 2px;
  font-weight: bold;
`

import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
  }

  onChangeBackgroundImageUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state
    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  renderForm = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="backgroundImageUrl"> Image Url</CustomLabel>
        <CustomInput
          id="backgroundImageUrl"
          type="text"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBackgroundImageUrl}
          placeholder="Enter the Image URL"
        />

        <CustomLabel htmlFor="TopText"> Top Text</CustomLabel>
        <CustomInput
          id="TopText"
          type="text"
          value={topTextInput}
          onChange={this.onChangeTopText}
          placeholder="Enter the Top Text"
        />

        <CustomLabel htmlFor="BottomText"> Top Text</CustomLabel>
        <CustomInput
          id="BottomText"
          type="text"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
          placeholder="Enter the Bottom Text"
        />

        <CustomLabel htmlFor="fontSize" value={fontSizeInput}>
          {' '}
          Font Size{' '}
        </CustomLabel>
        <CustomSelect
          id="fontSize"
          value={fontSizeInput}
          onChange={this.onChangeFontSize}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {' '}
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {backgroundImageUrl, topText, bottomText, fontSize} = this.state
    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={fontSize}>{topText}</TextContent>
        <TextContent activeFontSizeId={fontSize}> {bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading> Meme Containter</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator

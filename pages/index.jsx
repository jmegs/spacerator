import React from 'react'
import Clipboard from 'react-clipboard.js'

import '../style.css'

class Spacerator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '', output: null }
  }

  handleChange = event => {
    let userInput = event.target.value
    this.setState({ input: userInput, output: this.formatMessage(userInput) })
  }

  formatMessage = string => {
    return (
      string
        .split(' ')
        // for each word split the word into chars
        .map(w => w.split('').join('\xa0'))
        // join each word array with non-breaking space
        // .join('\xa0\xa0')
        .join('\xa0 ')
        .toUpperCase()
    )
  }

  getText = () => {
    return this.state.output
  }
  render() {
    return (
      <main>
        <h1>Spacerator</h1>
        <p className="intro">
          Type into the input and then copy the letterspaced result. This is
          really useful for tracking out capital letters in Google Slides.
        </p>
        <input
          type="text"
          placeholder="type something…"
          onChange={this.handleChange}
        />
        <div className="result">
          <p className="result__text">{this.formatMessage(this.state.input)}</p>
          <Clipboard
            data-clipboard-text={this.state.output}
            className="result__button"
            component="a"
          >
            <span>Copy</span>
          </Clipboard>
        </div>
      </main>
    )
  }
}

export default Spacerator

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
        <input
          type="text"
          placeholder="type something…"
          onChange={this.handleChange}
        />
        <div>the message is: {this.state.input}</div>
        <div>
          the result is: <span>{this.formatMessage(this.state.input)}</span>
        </div>
        <Clipboard data-clipboard-text={this.state.output}>Copy</Clipboard>
      </main>
    )
  }
}

export default Spacerator

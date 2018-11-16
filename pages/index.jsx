import React from 'react'

class Spacerator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '', output: null }
  }

  handleChange = event => {
    let userInput = event.target.value
    this.setState({ input: userInput, output: this.formatMessage })
  }

  formatMessage = () => {
    return (
      this.state.input
        .split(' ')
        // for each word split the word into chars
        .map(w => w.split('').join('\xa0'))
        // join each word array with non-breaking space
        // .join('\xa0\xa0')
        .join('\xa0 ')
        .toUpperCase()
    )

    // this.setState({ reversedMessage: result })
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
        <button onClick={this.formatMessage}>Format</button>
      </main>
    )
  }
}

export default Spacerator

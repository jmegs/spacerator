import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '', reversedMessage: '' }
  }

  formatMessage = () => {
    let result = this.state.message
      .split(' ')
      // for each word split the word into chars
      .map(w => w.split('').join('\xa0'))
      // join each word array with non-breaking space
      // .join('\xa0\xa0')
      .join(' ')
      .toUpperCase()

    this.setState({ reversedMessage: result })
  }
  render() {
    return (
      <React.Fragment>
        <div>the message is: {this.state.message}</div>
        <div>
          the result is: <span>{this.state.reversedMessage}</span>
        </div>
        <button onClick={this.formatMessage}>Format</button>
      </React.Fragment>
    )
  }
}

export default App

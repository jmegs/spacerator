import React from 'react'
import Clipboard from 'react-clipboard.js'
import Head from 'next/head'

import '../style.css'

class Spacerator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '', output: null, dirty: false }
  }

  handleChange = event => {
    let userInput = event.target.value
    this.setState({
      input: userInput,
      output: this.letterspace(userInput),
      dirty: !!this.state.input.length
    })
  }

  clearInput = () => {
    this.setState({ input: '', output: '', dirty: false })
  }

  letterspace = string => {
    return (
      string
        // split the string into words
        .split(' ')

        // for each word split the word into chars
        // then join them on a non-breaking space
        .map(w => w.split('').join('\xa0'))

        // take those spaced words and join them into a sentence
        // using a non-breaking plus and breaking space
        .join('\xa0 ')

        // then transform them to upper-case characters
        .toUpperCase()
    )
  }

  render() {
    return (
      <main>
        <Head>
          <title>Spacerator</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="A little utility to track out text. Inspired by Google Slides' lack of letterspacing."
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header>
          <h1>Spacerator</h1>
          <span className="version">v1.0</span>
        </header>
        <p className="intro">
          Type into the input and then copy the letterspaced result. This is
          really useful for tracking out capital letters in Google Slides.
        </p>
        <span className="inputContainer">
          <input
            value={this.state.input}
            type="text"
            placeholder="Type something…"
            onChange={this.handleChange}
          />
          {this.state.dirty && (
            <div className="inputContainer__clear" onClick={this.clearInput}>
              <span>&times;</span>
            </div>
          )}
        </span>
        <div className="result">
          <p className="result__text">{this.state.output}</p>
          <Clipboard
            data-clipboard-text={this.state.output}
            className={
              this.state.dirty ? 'result__button' : 'result__button disabled'
            }
            component="a"
          >
            <span>Copy</span>
          </Clipboard>
        </div>
        <div className="creds">
          made by <a href="https://twitter.com/jmegs">@jmegs</a>
        </div>
        <div className="creds">
          source on <a href="https://github.com/jmegs/spacerator.git">github</a>
        </div>
      </main>
    )
  }
}

export default Spacerator

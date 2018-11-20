# Spacerator

Letterspaces your text. Inspired by Google's inexplicable lack of basic typography controls.

## How it works

The whole app is a wrapper around this method.

```js
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
```

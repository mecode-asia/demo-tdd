module.exports = (text) => {
  let alreadyHasS = false
  const result = text
    .split('')
    .map(char => {
      if (alreadyHasS && char === 's') { return '' }
      if (char === 's') {
        alreadyHasS = true
      }
      return char
    }).join('')

  return result.replace('s', 'th')
}

class RegexMatcher {
  constructor(data) {
    this.i = 0
    this.data = data
  }

  match(regex, optional) {
    // Skip blank lines
    while(this.data[this.i].trim().length == 0) this.i++

    var match = regex.exec(this.data[this.i])

    if (match == null) {
      if (optional) return ''
      else throw new RegexMatcherException(this.i, this.data[this.i])
    }

    this.i++

    return match
  }
}

function RegexMatcherException(lineNumber, lineContent) {
  this.lineNumber = lineNumber
  this.message = "Couldn't parse line "+lineNumber+" with text: "+lineContent
  this.name = 'RegexMatcherException'
}

module.exports = RegexMatcher
const { paragraphRegex } = require('./fileMatchers')

class BodyMatcher {
  constructor(regexes, matcher) {
    this.regexes = regexes
    this.matcher = matcher
    this.fullLineMatcher = paragraphRegex
  }

  nextMatch() {
    var match
    var i = 0
    var optional = true
    var lastIndex = this.regexes.length - 1

    match = this.matcher.match(this.regexes[i].regex, optional)

    while (!match && ++i <= lastIndex) {
      match = this.matcher.match(this.regexes[i].regex, optional)
    }

    // If all failed, its a pargraph
    if (!match)
      return { match: null, regex: null }

    // if the last one failed, its the end of the file
    else if (i == lastIndex)
      return { match: match, regex: this.regexes[i], finalMatcher: true }

    // Otherwise, it's a match
    else
      return { match: match, regex: this.regexes[i] }
  }

  fullLineMatch() {
    return this.matcher.match(this.fullLineMatcher)
  }
}

module.exports = BodyMatcher

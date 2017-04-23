// Given an array of lines this object has a function that receives a
// regex and advances through the file one line at a time triying
// to match the regex. If there is no match an exception is thrown.
// A boolean second argument can be passed that indicates if the
// exception shound't be thrown.

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

var bodyRegexes = function(file) {
  return [
    {
      regex: materialRegex,
      containsData: true,
      saveField: "material"
    },
    {
      regex: reportTitleRegex,
      containsData: true,
      saveField: "reportType"
    },
    {
      regex: reportTitleUnderscoreRegex,
      containsData: false
    },
    {
      regex: descriptionRegex,
      containsData: true,
      saveField: "description"
    },
    {
      regex: diagnosisRegex,
      containsData: true,
      saveField: "diagnosis"
    },
    {
      regex: signatureRegex,
      containsData: false
    },
    {
      regex: signature2Regex,
      containsData: false
    },
    {
      regex: dateRegex,
      containsData: true,
      saveField: "date"
    }
  ]
}

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
      return { match: match, finalMatcher: true }

    // Otherwise, it's a match
    else
      return { match: match, regex: this.regexes[i] }
  }

  fullLineMatch() {
    return this.matcher.match(this.fullLineMatcher)
  }
}


// File parsing

const parseFile = (data) => {
  lines = data.split('\n')
  matcher = new RegexMatcher(lines)
  optional = true
  file = {}

  //  Header
  // ========
  matcher.match(headerTopBorderRegex)
  matcher.match(headerTitleRegex)
  matcher.match(headerSubtitleRegex)
  matcher.match(headerAddressRegex)

  file.protocol        = matcher.match(headerProtocolRegex)[1].trim()

  matcher.match(headerBlankRegex)

  patientData = matcher.match(headerPatientDataRegex)
  file.patientName     = patientData[1].trim()
  file.patientAge      = patientData[2].trim()

  matcher.match(headerBlankRegex)

  doctorAndInsurance   = matcher.match(headerDoctorAndInsuranceRegex)
  file.doctorName      = doctorAndInsurance[1].trim()
  file.insuranceCompay = doctorAndInsurance[2].trim()

  matcher.match(headerBottomBorderRegex)


  //  Body
  // ======

  bodyMatcher = new BodyMatcher(bodyRegexes(file), matcher)
  result = bodyMatcher.nextMatch()

  // Go throught all the optional body fields:
  // material, description, diagnosis
  while (!result.finalMatcher) {
    regex = result.regex

    if (regex.saveField) {
      file[regex.saveField] = result.match[1].trim()

      result = bodyMatcher.nextMatch()
      while (!result.match) {
        fullMatch = bodyMatcher.fullLineMatch()
        file[regex.saveField] += " "+fullMatch[1].trim()
        result = bodyMatcher.nextMatch()
      }
    } else {
      result = bodyMatcher.nextMatch()
    }
  }

  return file
}


function RegexMatcherException(lineNumber, lineContent) {
  this.lineNumber = lineNumber
  this.message = "Couldn't parse line "+lineNumber+" with text: "+lineContent
  this.name = 'RegexMatcherException'
}

// Given an array of lines this object has a function that receives a
// regex and advances through the file one line at a time triying
// to match the regex. If there is no match an exception is thrown.
// A boolean second argument can be passed that indicates if the
// exception shound't be thrown.

const RegexMatcher = require('./RegexMatcher')
const BodyMatcher = require('./BodyMatcher')
const ReportFile = require('./ReportFile')
const bodyRegexes = require('./BodyRegexes')
const { headerTopBorderRegex,
  headerTitleRegex,
  headerSubtitleRegex,
  headerAddressRegex,
  headerProtocolRegex,
  headerBlankRegex,
  headerPatientDataRegex,
  headerDoctorAndInsuranceRegex,
  headerBottomBorderRegex } = require('./fileMatchers')

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

  bodyMatcher = new BodyMatcher(bodyRegexes, matcher)
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

  // Save the date (last regex)
  file[result.regex.saveField] = result.match[1].trim();

  return new ReportFile(file)
}


module.exports = parseFile;

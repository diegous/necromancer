const { headerTopBorderRegex,
  headerTitleRegex,
  headerSubtitleRegex,
  headerAddressRegex,
  headerProtocolRegex,
  headerBlankRegex,
  headerPatientDataRegex,
  headerDoctorAndInsuranceRegex,
  headerBottomBorderRegex,
  materialRegex,
  reportTitleRegex,
  reportTitleUnderscoreRegex,
  descriptionRegex,
  paragraphRegex,
  diagnosisRegex,
  signatureRegex,
  signature2Regex,
  dateRegex } = require('./fileMatchers')

const bodyRegexes = [
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

module.exports = bodyRegexes

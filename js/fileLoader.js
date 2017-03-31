const fs = require('fs')
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  },
  useNullAsDefault: true
})

knex.schema.createTableIfNotExists('files', function (table) {
  table.increments()
  table.string('path')
  table.text('data')
  table.timestamps()
})

const loadData = (el) => {
  knex
    .select('path', 'data')
    .from('files')
    .then((data) => {
      el.textContent = data
    })
}

const loadFile = (path) => {


  fs.readFile(path, 'utf-8', (err, data) => {
    console.log(path)

    if (!err) {
      newFile = parseFile(data)
      // save newFile in database
    }

    console.log("lala")
  })
}


// File parsing

const parseFile = (data) => {
  lines = data.split('\n')
  matcher = regexMatcher(data)
  optional = true
  file = {}

  // File header
  matcher.match(headerTopBorderRegex)
  matcher.match(headerTitleRegex)
  matcher.match(headerSubtitleRegex)
  matcher.match(headerAddressRegex)
  file.protocol = matcher.match(protocolRegex)[1]
  matcher.match(headerBlankRegex)
  patientData = matcher.match(headerPatientDataRegex)
  file.patientName = patientData[1]
  file.patientAge = patientData[2]
  matcher.match(headerBlankRegex)
  doctorAndInsurance = matcher.match(headerDoctorAndInsuranceRegex)
  file.doctorName = doctorAndInsurance[1]
  file.insuranceCompay = doctorAndInsurance[2]
  matcher.match(headerBottomBorderRegex)

  // File body
  // 'material' may or may not be present
  file.material = ''
  if (line = matcher.match(materialRegex, optional)){
    file.material += line

    while (!matcher.match(reportTitleRegex, optional))
      file.material += matcher.match(materialRegex, optional)
  } else {
    matcher.match(reportTitleRegex)
  }

  matcher.match(reportTitleUnderscoreRegex)
  matcher.match(descriptionTitleRegex)

  // 'description' may not be present
  file.description = ''
  file.diagnosis = ''
  if (line = matcher.match(descriptionTitleRegex, optional)) {
    file.description += line

    while (!(file.diagnosis = matcher.match(signatureRegex, optional)))
      file.description += matcher.match(fullLineRegex)[1].concat(' ')
  } else {
    file.diagnosis = matcher.match(signatureRegex)
  }

  if (line = matcher.match(descriptionTitleRegex, optional)) {
    file.diagnosis += line

    while (!matcher.match(signatureRegex, optional))
      file.diagnosis += matcher.match(fullLineRegex)[1].concat(' ')
  }

  diagnosis = matcher.match(diagnosisRegex)
  matcher.match(blank)
  note = matcher.match(noteRegex, optional)
  matcher.match(blank)
  matcher.match(blank)

  // File footer
  matcher.match(signatureRegex)
  matcher.match(signature2Regex)
  date = matcher.match(dateRegex)

}

// Given an array of lines it returns a function that receives a
// regex and advances through the file one line at a time triying
// to match the regex. If there is no match an exception is thrown.
// A boolean second argument can be passed that indicates if the
// exception shound't be thrown.
const regexMatcher = function(data) {
  i: 0,
  data: data,
  match: function (regex, optional) => {
    // Skip blank lines
    while(data[this.i].length == 0) this.i++

    match = regex.exec(data[this.i])

    if (match == null) {
      if (optional) return ''
      else throw new RegexMatcherException(i)
    }

    this.i++

    return match
  }
}

function RegexMatcherException(lineNumber) {
   this.lineNumber = lineNumber
   this.message = "Couldn't parse line "+lineNumber
   this.name = 'RegexMatcherException'
}

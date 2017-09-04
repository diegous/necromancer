class ReportFile {
  constructor(file) {
    this.id              = file.id || ''
    this.protocol        = file.protocol || ''
    this.patientName     = file.patientName || ''
    this.patientAge      = file.patientAge || ''
    this.doctorName      = file.doctorName || ''
    this.insuranceCompay = file.insuranceCompay || ''
    this.material        = file.material || ''
    this.reportType      = file.reportType || ''
    this.description     = file.description || ''
    this.diagnosis       = file.diagnosis || ''
    this.date            = file.date || ''
    this.fileName        = file.fileName || ''
  }
}

module.exports = ReportFile

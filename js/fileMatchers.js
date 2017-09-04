const regexes = {
  headerTopBorderRegex:          /┌────────────────────────────────────────────────────────────────────┐/,
  headerTitleRegex:              /│   Laboratorio de Histo y Citopatología                             │/,
  headerSubtitleRegex:           /│           Dr. Enrique C. Muñoa          ┌──────────────────────────┤/,
  headerAddressRegex:            /│   Roca 279∙\(8324\) Cipolletti∙Río Negro  │                          │/,
  headerProtocolRegex:           /├───────── Teléfono: \(0943\) 74373 ────────┘\s*Protocolo N°\s*(\d+)\s*│/,
  headerBlankRegex:              /│                                                                    │/,
  headerPatientDataRegex:        /│Paciente:(.+)Edad:(.+)\s*│/,
  //headerBlankRegex                    /│                                                                    │/
  headerDoctorAndInsuranceRegex: /│Solicitado por (.+)O. Social:(.+)│/,
  headerBottomBorderRegex:       /└────────────────────────────────────────────────────────────────────┘/,
  materialRegex:                 /Material (?:R|r)emitido\s*:(.+)/,
  //blank                               //
  reportTitleRegex:              /\s*(INFORME .+)/,
  reportTitleUnderscoreRegex:    /\s+=+/,
  //blank                               //
  descriptionRegex:              /(DESCRIPCI(?:o|ó)N \S.*:\s*\S?.*)/gi,
  paragraphRegex:                /\s*(\S.*)/,
  //blank                               //
  diagnosisRegex:                /(DIAGN(?:o|ó)STICO \S.*:\s*\S?.*)/gi,
  //blank                               //
  //blank                               //
  //blank                               //
  signatureRegex:                /\s*Dr. Enrique.+Muñoa/,
  signature2Regex:               /\s*Médico Anatomopatólogo/,
  dateRegex:                     /\s*Cipolletti,(.+).\s*M.R.N. 1045  M.Nqn. 1098/
}

module.exports = regexes
const headerTopBorderRegex =          /┌────────────────────────────────────────────────────────────────────┐/
const headerTitleRegex =              /│   Laboratorio de Histo y Citopatología                             │/
const headerSubtitleRegex =           /│           Dr. Enrique C. Muñoa          ┌──────────────────────────┤/
const headerAddressRegex =            /│   Roca 279∙\(8324\) Cipolletti∙Río Negro  │                          │/
const headerProtocolRegex =           /├───────── Teléfono: \(0943\) 74373 ────────┘\s*Protocolo N°\s*(\d+)\s*│/
const headerBlankRegex =              /│                                                                    │/
const headerPatientDataRegex =        /│Paciente: (.+) Edad: (\d+)\s*│/
//headerBlankRegex                    /│                                                                    │/
const headerDoctorAndInsuranceRegex = /│Solicitado por (.+)\s+O. Social: (.+) │/
const headerBottomBorderRegex =       /└────────────────────────────────────────────────────────────────────┘/
const materialRegex =                 /Material (?:R|r)emitido:(.+)/
//blank                               //
const reportTitleRegex =              /\s*(INFORME .+)/
const reportTitleUnderscoreRegex =    /\s+=+/
//blank                               //
const descriptionRegex =              /(DESCRIPCION \S.*:\s*\S?.*)/
const paragraphRegex =                /\s*(\S.*)/
//blank                               //
const diagnosisRegex =                /(DIAGNOSTICO \S.*:\s*\S?.*)/
//blank                               //
//blank                               //
//blank                               //
const signatureRegex =                /\s*Dr. Enrique C. Muñoa/
const signature2Regex =               /\s*Médico Anatomopatólogo/
const dateRegex =                     /\s*Cipolletti, (.+).\s*M.R.N. 1045  M.Nqn. 1098/

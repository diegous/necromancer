headerTopBorderRegex =          /┌────────────────────────────────────────────────────────────────────┐/
headerTitleRegex =              /│   Laboratorio de Histo y Citopatología                             │/
headerSubtitleRegex =           /│           Dr. Enrique C. Muñoa          ┌──────────────────────────┤/
headerAddressRegex =            /│   Roca 279∙(8324) Cipolletti∙Río Negro  │                          │/
headerProtocolRegex =           /├───────── Teléfono: (0943) 74373 ────────┘    Protocolo N° 99999    │/
headerBlankRegex =              /│                                                                    │/
headerPatientDataRegex =        /│Paciente: MARIA ALEGRIA                       Edad: 99              │/
headerBlankRegex =              /│                                                                    │/
headerDoctorAndInsuranceRegex = /│Solicitado por Dr. COZME FULANITO             O. Social: OSPECA     │/
headerBottomBorderRegex =       /└────────────────────────────────────────────────────────────────────┘/
materialRegex =                 /Material Remitido: Se recibe un huevada./
blankRegex =                    //
reportTitleRegex =              /                        INFORME DE COLPOCITOLOGIA/
reportTitleUnderscoreRegex =    /                        =========================/
//blank                         //
descriptionTitleRegex =         /DESCRIPCION CITOLOGICA:/
descriptionRegex =              /        Extendido trófico con células re loquitas superficiales e/
                                /intermedias. Abundantes cositas feas. Flora bacteriana de tipo nada./
                                /Moderado proceso inflamatorio. Presencia de duendes mágicos verdes./
                                /Muy aisladas células celulosas./
blankRegex =                    //
diagnosisRegex =                /DIAGNOSTICO ONCOLOGICO: CLASE X-MEN/
//blank                         //
noteRegex =                     /Aconsejamos repetir el estudio luego del tratamiento específico./
//blank                         //
//blank                         //
signatureRegex =                /                                              Dr. Enrique C. Muñoa/
signature2Regex =               /                                             Médico Anatomopatólogo/
dateRegex =                     / Cipolletti, 29 de abril de 1993.           M.R.N. 1045  M.Nqn. 1098/



headerTopBorderRegex =          /┌────────────────────────────────────────────────────────────────────┐/
headerTitleRegex =              /│   Laboratorio de Histo y Citopatología                             │/
headerSubtitleRegex =           /│           Dr. Enrique C. Muñoa          ┌──────────────────────────┤/
headerAddressRegex =            /│   Roca 279∙(8324) Cipolletti∙Río Negro  │                          │/
headerProtocolRegex =           /├───────── Teléfono: (0943) 74373 ────────┘\s*Protocolo N°\s*(\d+)\s*│/
headerBlankRegex =              /│                                                                    │/
headerPatientDataRegex =        /│Paciente: (.+) Edad: (\d+)\s*│/
headerBlankRegex =              /│                                                                    │/
headerDoctorAndInsuranceRegex = /│Solicitado por (.+)\s+O. Social: (.+) │/
headerBottomBorderRegex =       /└────────────────────────────────────────────────────────────────────┘/
materialRegex =                 /Material (R|r)emitido:(.+)/
//blank                         //
reportTitleRegex =              /\s*(INFORME .+)/
reportTitleUnderscoreRegex =    /\s+=+/
//blank                         //
descriptionTitleRegex =         /(DESCRIPCION \S.*:\s*\S.*)/
descriptionRegex =              /\s*(\S.*)/
blankRegex =                    //
diagnosisRegex =                /(DIAGNOSTICO \S.*:\s*\S.*)/
noteRegex =                     /\s*(\S.*)/
//blank                         //
//blank                         //
//blank                         //
signatureRegex =                /\s*Dr. Enrique C. Muñoa/
signature2Regex =               /\s*Médico Anatomopatólogo/
dateRegex =                     /\s*Cipolletti, (.+).\s*M.R.N. 1045  M.Nqn. 1098/

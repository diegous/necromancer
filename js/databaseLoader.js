// Database fields
DB_FIELDS = [
  '++id',
  'protocol',
  'patientName',
  'patientAge',
  'doctorName',
  'insuranceCompay',
  'material',
  'reportType',
  'description',
  'diagnosis',
  'date',
  'fileNumber'
]

const Dexie = require('dexie');
var db = new Dexie("file_database")
db.version(1).stores({
    files: DB_FIELDS.join()
});

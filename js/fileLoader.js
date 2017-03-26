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
    knex('files')
      .insert({path: path, data: data})
      .then(console.log)
  })
}

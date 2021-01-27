const config = require('../knexfile.js')
const knex = require('knex')(config)

// when this file is loaded on 'npm start'
// migrations will be created automatically
knex.migrate.latest([config])

module.exports = knex 

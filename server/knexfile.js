module.exports = {
  client: 'postgresql',
  connection: {
    database: 'teachtolearn',
    user: 'postgres',
    password: '01022746'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
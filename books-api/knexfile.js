module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/clarks_library'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}

module.exports = {

    development: {
      client: 'mysql',
        debug: true,
      connection: {
        host : 'localhost',
        user : 'root',
        password : 'password',
        database : 'rpjoga',
        port: 3306
      },
       
      migrations:{
        directory: './src/database/migrations'
      },
      useNullAsDefault: true,
    },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password',
        port:3306
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };
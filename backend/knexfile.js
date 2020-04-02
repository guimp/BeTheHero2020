// Update with your config settings.

module.exports = {

  development: {//ambiente de dev na maquina
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite3'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault:true,
  },

  staging: {//ambiente de producao para o time de desenvolvimento para teesta aplicacao online
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
  },

  production: {//ambiente de producao para qndo e jogado online para usuarios testarem
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

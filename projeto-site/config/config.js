module.exports = {
  production: {
    username: 'termolabs',
    password: '#Gfgrupo8',
    database: 'BDGrupo08',
    host: 'bdgrupo08.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 

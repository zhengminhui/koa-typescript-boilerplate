import { Options } from 'sequelize';

const isProduction = process.env.NODE_ENV === 'production';

const config = isProduction
  ? {
    database: '',
    user: '',
    password: '',
    host: '',
    port: 3306,
  }
  : {
    database: 'local_db',
    user: 'root',
    password: '12345678!',
    host: 'localhost',
    port: 3306,
  };

const options: Options = {
  host: config.host,
  dialect: 'mysql',
  operatorsAliases: false,
  port: config.port,

  pool: {
    max: 100,
    min: 20,
    acquire: 30000,
    idle: 10000,
  },
};

export { config, options };

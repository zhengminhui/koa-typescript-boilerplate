import Sequelize from 'sequelize';
import { config, options } from './config';

const { database, user, password } = config;
const sequelize = new Sequelize(database, user, password, options);

// connect to database
sequelize
  .authenticate()
  .then(() => {
    console.log('Sequelize: Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Sequelize: Unable to connect to the database:', err);
  });

export { sequelize };

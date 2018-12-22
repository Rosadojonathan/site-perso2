const Sequelize = require('sequelize');
const dbCredentials = require("../db-credentials.js").dbCredentials;

const sequelize = new Sequelize('blog', dbCredentials.username, dbCredentials.password, {
  host: 'localhost',
  port:"5432",
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const models = {
    Post: sequelize.import('./post'),
  };


sequelize.authenticate()
  .then(() => {
    console.log('connected to DB');
  });
sequelize.sync().then(()=>{
  console.log('synchro ok')
});
console.log(models)

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });
  
  models.sequelize = sequelize;
  models.Sequelize = Sequelize;
  
  module.exports = models;

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


  
 
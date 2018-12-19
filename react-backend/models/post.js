

module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
      id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement : true 
      },
      path: {
        type: Sequelize.STRING
      },
      title:{
          type: Sequelize.STRING
      },
      description: {
          type: Sequelize.TEXT
      },
      content:{
          type: Sequelize.TEXT
      },
      image:{
          type: Sequelize.STRING
      },
      createdAt:{
          type: Sequelize.DATE
      }
    });
  
    return Post;
  };
  
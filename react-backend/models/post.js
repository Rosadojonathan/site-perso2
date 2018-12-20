

module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        unique:true,
      },
      path: {
        type: Sequelize.STRING(1000)
      },
      title:{
          type: Sequelize.STRING(1000)
      },
      description: {
          type: Sequelize.TEXT
      },
      content:{
          type: Sequelize.TEXT
      },
      image:{
          type: Sequelize.STRING(1000)
      },
      createdAt:{
          type: Sequelize.DATE(1000)
      }
     

    });
  
    return Post;
  };
  


module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        unique:true,
      },
      path: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      title:{
          type: Sequelize.STRING(1000),
          allowNull:false
      },
      description: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      content:{
          type: Sequelize.TEXT,
          allowNull: false
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
  
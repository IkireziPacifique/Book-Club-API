const Sequelize = require('sequelize');

const Book = sequelize.define('member', {
  book_id: {
    autoIncrement: true,
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  author: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  published_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  ISBN: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  copies: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'book',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "book_id" },
      ]
    },
  ]
});

export default Book

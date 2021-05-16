const Users = require('./Users');
const Favorites = require('./Favorites');

Users.hasMany(Favorites, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Favorites.belongsTo(Users, {
  foreignKey: 'user_id'
});

module.exports = { Users, Favorites };
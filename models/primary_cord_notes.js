/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('primary_cord_notes', {
    primary_cord_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'primary_cord',
        key: 'id'
      }
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'primary_cord_notes',
    classMethods: {
      associate: function (models) {
        models.PrimaryCordNotes.belongsTo(models.PrimaryCord)
      }
    }
  })
}

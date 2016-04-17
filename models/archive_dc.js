/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('archive_dc', {
    archive_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    archive_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    archive_notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'archive_dc',
    classMethods: {
      associate: function (models) {
        var ArchiveDc = models.ArchiveDc

        // -- Has many
        ArchiveDc.hasMany(models.Khipu, { as: 'Khipus' })
      }
    }
  })
}

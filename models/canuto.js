/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('canuto', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'khipu',
        key: 'id'
      }
    },
    cto_cluster_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'canuto_cluster',
        key: 'id'
      }
    },
    num_loops: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    num_cords: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attach_post: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    investigator_cto_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canuto_length: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cto_cluster_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    changed_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    changed_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    cto_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cto_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pendant_from: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'primary_cord',
        key: 'id'
      }
    },
    cto_beg_cord: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cto_end_cord: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'canuto',
    classMethods: {
      associate: function (models) {
        var Canuto = models.Canuto

        // -- Belongs to
        Canuto.belongsTo(models.Khipu)
        Canuto.belongsTo(models.CanutoCluster, { foreignKey: 'cto_cluster_id' })
        Canuto.belongsTo(models.PrimaryCord, { foreignKey: 'pendant_from' })

        // -- Has many
        Canuto.hasMany(models.XCanutoColorFlat, { as: 'XCanutoColorFlats' })
        Canuto.hasMany(models.CanutoCordFlat, { as: 'CanutoCordFlats' })
        Canuto.hasMany(models.CanutoColor, { as: 'CanutoColors' })
      }
    }
  })
}

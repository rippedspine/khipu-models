/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('cord_cluster', {
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'khipu',
        key: 'id'
      }
    },
    primary_cord_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'primary_cord',
        key: 'id'
      }
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    start_position: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    end_position: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num_cords: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cluster_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    spacing: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    beg_cord: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    end_cord: {
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
    grouping_class: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'grouping_class_dc',
        key: 'class_code'
      }
    },
    beg_inv_cord: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    end_inv_cord: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'cord_cluster',
    classMethods: {
      associate: function (models) {
        var CordCluster = models.CordCluster

        // -- Belongs to
        CordCluster.belongsTo(models.Khipu)
        CordCluster.belongsTo(models.PrimaryCord)

        // -- Has one
        CordCluster.hasOne(models.GroupingClassDc)

        // -- Has many
        CordCluster.hasMany(models.Cord, { as: 'Cords' })
      }
    }
  })
}

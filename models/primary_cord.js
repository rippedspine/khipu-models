/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('primary_cord', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'khipu',
        key: 'id'
      }
    },
    struct: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'structure_dc',
        key: 'structure_cd'
      }
    },
    thickness: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    attached_to: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pcord_length: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fiber: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'fiber_dc',
        key: 'fiber_cd'
      }
    },
    termination: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'termination_dc',
        key: 'termination_cd'
      }
    },
    beginning: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'beginning_dc',
        key: 'beginning_cd'
      }
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    changed_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    changed_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    twist: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'twist_dc',
        key: 'twist_cd'
      }
    },
    plainnotes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'primary_cord',
    classMethods: {
      associate: function (models) {
        var PrimaryCord = models.PrimaryCord

        // -- Belongs to
        PrimaryCord.belongsTo(models.Khipu)

        // -- Has many
        PrimaryCord.hasMany(models.Cord, { as: 'Cords' })
        PrimaryCord.hasMany(models.CanutoCordFlat, { as: 'CanutoCordFlats' })
        PrimaryCord.hasMany(models.Canuto, { as: 'Canutos' })
        PrimaryCord.hasMany(models.CordCluster, { as: 'CordClusters' })
      }
    }
  })
}

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('cord', {
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'khipu',
        key: 'id'
      }
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    twist_angle: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    thickness: {
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
    pendant_from: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'primary_cord',
        key: 'id'
      }
    },
    attached_to: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attachment_type: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'attachment_dc',
        key: 'attach_cd'
      }
    },
    cluster_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cord_cluster',
        key: 'id'
      }
    },
    cluster_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cord_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attach_post: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cord_length: {
      type: DataTypes.DECIMAL,
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
    cord_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cord_notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    twist: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'twist_dc',
        key: 'twist_cd'
      }
    },
    cord_classification: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'cord_classification_dc',
        key: 'classification_cd'
      }
    },
    investigator_cord_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canuto_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canuto_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'canuto',
        key: 'id'
      }
    }
  }, {
    tableName: 'cord',
    classMethods: {
      associate: function (models) {
        var Cord = models.Cord

        // -- Belongs to
        Cord.belongsTo(models.Khipu)
        Cord.belongsTo(models.Canuto)
        Cord.belongsTo(models.PrimaryCord)
        Cord.belongsTo(models.CordCluster)

        // -- Has one
        Cord.hasOne(models.CordColorNotes, { as: 'ColorCordNote' })
        Cord.hasOne(models.CordNotes, { as: 'CordNote' })

        // -- Has many
        Cord.hasMany(models.CordValueComponents, { as: 'CordValueComponents' })
        Cord.hasMany(models.Canutito, { as: 'Canutitos' })
        Cord.hasMany(models.CanutoCluster, { as: 'CanutoClusters' })
        Cord.hasMany(models.CanutoCordFlat, { as: 'CanutoCordFlats' })
        Cord.hasMany(models.CordColor, { as: 'CordColors' })
        Cord.hasMany(models.KnotCluster, { as: 'KnotClusters' })
      }
    }
  })
}

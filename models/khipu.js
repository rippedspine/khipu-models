/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('khipu', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    earliest_age: {
      type: DataTypes.DATE,
      allowNull: true
    },
    latest_age: {
      type: DataTypes.DATE,
      allowNull: true
    },
    provenance: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_discovered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    discovered_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    museum_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    museum_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    museum_num: {
      type: DataTypes.STRING,
      allowNull: true
    },
    condition_of_khipu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true
    },
    investigator_num: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complete: {
      type: DataTypes.BOOLEAN,
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
    duplicate_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    duplicate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    archive_dc_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'archive_dc',
        key: 'archive_num'
      }
    },
    museum_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'museum',
        key: 'id'
      }
    },
    khipu_provenance_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'khipu_provenance',
        key: 'id'
      }
    },
    orig_inv_num: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'khipu',
    classMethods: {
      associate: function (models) {
        var Khipu = models.Khipu

        // -- Belongs to many
        Khipu.belongsToMany(models.Khipu, {
          through: models.PrimaryCordAttach,
          as: 'AttachedTo',
          foreignKey: 'attached_to_id'
        })

        // -- Belongs to
        Khipu.belongsTo(models.Museum)
        Khipu.belongsTo(models.KhipuProvenance)
        Khipu.belongsTo(models.ArchiveDc)

        // -- Has one
        Khipu.hasOne(models.PrimaryCord, { as: 'PrimaryCord' })
        Khipu.hasOne(models.KhipuNote, { as: 'KhipuNote' })

        // -- Has many
        Khipu.hasMany(models.Cord, { as: 'Cords' })
        Khipu.hasMany(models.CordCluster, { as: 'CordClusters' })
        Khipu.hasMany(models.CordValueComponents, { as: 'CordValueComponents' })
        Khipu.hasMany(models.XCanutoColorFlat, { as: 'XCanutoColorFlats' })
        Khipu.hasMany(models.CanutoCordFlat, { as: 'CanutoCordFlats' })
        Khipu.hasMany(models.Canuto, { as: 'Canutos' })
        Khipu.hasMany(models.Canutito, { as: 'Canutitos' })
        Khipu.hasMany(models.CanutoCluster, { as: 'CanutoClusters' })
        Khipu.hasMany(models.CanutoColor, { as: 'CanutoColors' })
        Khipu.hasMany(models.CordColor, { as: 'CordColors' })
        Khipu.hasMany(models.CordValueComponents, { as: 'CordValueComponents' })
      }
    }
  })
}

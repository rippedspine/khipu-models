/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('cord_color', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'khipu',
        key: 'id'
      }
    },
    cord_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cord',
        key: 'id'
      }
    },
    pcord_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    color_cd_1: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
      }
    },
    operator_1: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_operator_dc',
        key: 'operator_cd'
      }
    },
    color_range: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pigmentation_cd_1: {
      type: DataTypes.STRING,
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
    color_cd_2: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
      }
    },
    operator_2: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_operator_dc',
        key: 'operator_cd'
      }
    },
    color_cd_3: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
      }
    },
    operator_3: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_operator_dc',
        key: 'operator_cd'
      }
    },
    color_cd_4: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
      }
    },
    operator_4: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_operator_dc',
        key: 'operator_cd'
      }
    },
    color_cd_5: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
      }
    },
    operator_5: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_operator_dc',
        key: 'operator_cd'
      }
    },
    range_beg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    range_end: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pigmentation_cd_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pigmentation_cd_3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pigmentation_cd_4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pigmentation_cd_5: {
      type: DataTypes.STRING,
      allowNull: true
    },
    full_color: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'cord_color',
    classMethods: {
      associate: function (models) {
        var CordColor = models.CordColor

        // -- Belongs to
        CordColor.belongsTo(models.Khipu)
        CordColor.belongsTo(models.Cord)
      }
    }
  })
}

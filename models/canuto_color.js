/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('canuto_color', {
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'khipu',
        key: 'id'
      }
    },
    canuto_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'canuto',
        key: 'id'
      }
    },
    color_cd_1: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
      }
    },
    color_cd_2: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
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
    cto_fiber: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'fiber_dc',
        key: 'id'
      }
    },
    color_range: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    range_beg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    range_end: {
      type: DataTypes.FLOAT,
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
    }
  }, {
    tableName: 'canuto_color',
    classMethods: {
      associate: function (models) {
        var CanutoColor = models.CanutoColor

        CanutoColor.belongsTo(models.Canuto)
        CanutoColor.belongsTo(models.Khipu)
      }
    }
  })
}

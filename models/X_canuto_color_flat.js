/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('X_canuto_color_flat', {
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'khipu',
        key: 'id'
      }
    },
    investigator_num: {
      type: DataTypes.STRING,
      allowNull: true
    },
    canuto_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'canuto',
        key: 'id'
      }
    },
    cto_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canuto_length: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    color_1: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
      }
    },
    color_2: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
      }
    },
    color_3: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
      }
    },
    color_4: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
      }
    },
    color_5: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'color_dc',
        key: 'color_cd'
      }
    }
  }, {
    tableName: 'X_canuto_color_flat',
    classMethods: {
      associate: function (models) {
        var XCanutoColorFlat = models.XCanutoColorFlat

        XCanutoColorFlat.belongsTo(models.Khipu)
        XCanutoColorFlat.belongsTo(models.Canuto)
      }
    }
  })
}

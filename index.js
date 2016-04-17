var Sequelize = require('sequelize')
var fs = require('fs')
var path = require('path')
var _ = require('lodash')

var config = require('./env.json')[process.env.NODE_ENV || 'development']

var sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  port: config.PORT,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false,
    freezeTableName: true,
    paranoid: true,
    underscored: true
  }
})

var models = {}

fs
  .readdirSync(path.resolve(__dirname, 'models'))
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach(file => {
    var model = sequelize.import(path.join(__dirname, 'models', file))
    models[_.upperFirst(_.camelCase(model.name))] = model
  })

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

module.exports = models

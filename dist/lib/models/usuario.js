"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class Rol extends _sequelize.Model {
  static init(sequelize) {
    return super.init({
      nombre: _sequelize.DataTypes.STRING,
      direccion: _sequelize.DataTypes.STRING,
      telefono: _sequelize.DataTypes.STRING,
      mail: _sequelize.DataTypes.STRING,
      dni: _sequelize.DataTypes.STRING,
      pass: _sequelize.DataTypes.STRING,
      idRol: _sequelize.DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'usuario'
    });
  }

}

exports.default = Rol;
//# sourceMappingURL=usuario.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class Carrera extends _sequelize.Model {
  static init(sequelize) {
    return super.init({
      nombre: _sequelize.DataTypes.STRING,
      id_Carrera: _sequelize.DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'Materia'
    });
  }

}

exports.default = Carrera;
//# sourceMappingURL=materia.js.map
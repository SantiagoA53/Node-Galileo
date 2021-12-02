"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class Carrera extends _sequelize.Model {
  static init(sequelize) {
    return super.init({
      nombre: _sequelize.DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Carrera'
    });
  }

}

exports.default = Carrera;
;
//# sourceMappingURL=carrera.js.map
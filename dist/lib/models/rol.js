"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class Rol extends _sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: _sequelize.DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Rol'
    });
  }

}

exports.default = Rol;
;
//# sourceMappingURL=rol.js.map
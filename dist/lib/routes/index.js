"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Roles = _interopRequireDefault(require("./Roles"));

var _carreras = _interopRequireDefault(require("./carreras"));

var _materias = _interopRequireDefault(require("./materias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use('/carreras', _carreras.default);
router.use('/roles', _Roles.default);
router.use('/materias', _materias.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map
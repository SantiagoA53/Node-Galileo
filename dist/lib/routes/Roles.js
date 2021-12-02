"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _utils = require("./utils");

var _rol_controllers = require("../controllers/rol_controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', (0, _utils.withErrorHandling)(_rol_controllers.index));
router.get('/:id', (0, _utils.withErrorHandling)(_rol_controllers.show));
router.post('/', (0, _utils.withErrorHandling)(_rol_controllers.create));
router.put('/:id', (0, _utils.withErrorHandling)(_rol_controllers.update));
var _default = router;
exports.default = _default;
//# sourceMappingURL=Roles.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.create = exports.show = exports.index = void 0;

var _rol = _interopRequireDefault(require("../models/rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const index = async (req, res) => {
  const rols = await _rol.default.findAll({});
  res.json({
    data: rols.map(rol => rol.toJSON())
  });
};

exports.index = index;

const show = async (req, res) => {
  const rols = await _rol.default.findByPk(req.params.id);

  if (rols) {
    res.json({
      data: rols.toJSON()
    });
  } else {
    res.status(404).json({
      message: `No se encontro la rols con el id ${req.param.id}`
    });
  }
};

exports.show = show;

const create = async (req, res) => {
  try {
    if (req.body.name !== undefined) {
      const rols = await _rol.default.create({
        name: req.body.name
      });
      res.status(200).send({
        id: rols.id
      });
    } else {
      res.status(400).json('name no recibido');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.create = create;

const update = async (req, res) => {
  try {
    if (req.body.name !== undefined) {
      const rols = await _rol.default.findByPk(req.params.id);
      rols.name = req.body.name;
      await rols.save(); //res.status(200).send({ id: rols.id });

      res.status(200).send({
        id: rols.name
      });
    } else {
      res.status(400).json('name no recibido');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.update = update;
//# sourceMappingURL=rol_controllers.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.create = exports.show = exports.index = void 0;

var _materia = _interopRequireDefault(require("../models/materia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const index = async (req, res) => {
  const Materias = await _materia.default.findAll({});
  res.json({
    data: Materias.map(materia => materia.toJSON())
  });
};

exports.index = index;

const show = async (req, res) => {
  const Materias = await _materia.default.findByPk(req.params.id);

  if (Materias) {
    res.json({
      data: Materias.toJSON()
    });
  } else {
    res.status(404).json({
      message: `No se encontro la Materias con el id ${req.param.id}`
    });
  }
};

exports.show = show;

const create = async (req, res) => {
  try {
    if (req.body.nombre !== undefined) {
      const Materias = await _materia.default.create({
        nombre: req.body.nombre
      });
      res.status(200).send({
        id: Materias.id
      });
    } else {
      res.status(400).json('nombre no recibido');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.create = create;

const update = async (req, res) => {
  try {
    if (req.body.nombre !== undefined) {
      const Materias = await _materia.default.findByPk(req.params.id);
      Materias.nombre = req.body.nombre;
      await Materias.save(); //res.status(200).send({ id: Materias.id });

      res.status(200).send({
        id: Materias.nombre
      });
    } else {
      res.status(400).json('nombre no recibido');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.update = update;
//# sourceMappingURL=materia_controllers.js.map
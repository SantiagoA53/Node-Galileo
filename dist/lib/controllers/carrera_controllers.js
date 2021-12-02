"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.create = exports.show = exports.index = void 0;

var _carrera = _interopRequireDefault(require("../models/carrera"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const index = async (req, res) => {
  const carreras = await _carrera.default.findAll({});
  res.json({
    data: carreras.map(carrera => carrera.toJSON())
  });
};

exports.index = index;

const show = async (req, res) => {
  const carrera = await _carrera.default.findByPk(req.params.id);

  if (carrera) {
    res.json({
      data: carrera.toJSON()
    });
  } else {
    res.status(404).json({
      message: `No se encontro la carrera con el id ${req.param.id}`
    });
  }
};

exports.show = show;

const create = async (req, res) => {
  try {
    if (req.body.nombre !== undefined) {
      const carrera = await _carrera.default.create({
        nombre: req.body.nombre
      });
      res.status(200).send({
        id: carrera.id
      });
    } else {
      res.status(400).json('Nombre no recibido');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.create = create;

const update = async (req, res) => {
  try {
    if (req.body.nombre !== undefined) {
      const carrera = await _carrera.default.findByPk(req.params.id);
      carrera.nombre = req.body.nombre;
      await carrera.save(); //res.status(200).send({ id: carrera.id });

      res.status(200).send({
        id: carrera.nombre
      });
    } else {
      res.status(400).json('Nombre no recibido');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.update = update;
//# sourceMappingURL=carrera_controllers.js.map
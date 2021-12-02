"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.create = exports.show = exports.index = void 0;

var _materia = _interopRequireDefault(require("../models/materia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const index = async (req, res) => {
  const Usuario = await _materia.default.findAll({});
  res.json({
    data: Usuario.map(Usuario => Usuario.toJSON())
  });
};

exports.index = index;

const show = async (req, res) => {
  const Usuario = await _materia.default.findByPk(req.params.id);

  if (Usuario) {
    res.json({
      data: Usuario.toJSON()
    });
  } else {
    res.status(404).json({
      message: `No se encontro la Usuario con el id ${req.param.id}`
    });
  }
};

exports.show = show;

const create = async (req, res) => {
  try {
    if (req.body.nombre !== undefined) {
      const Usuario = await _materia.default.create({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        mail: req.body.mail,
        dni: req.body.dni,
        pass: req.body.pass,
        idRol: req.body.idRol
      });
      res.status(200).send({
        id: Usuario.id
      });
    } else {
      res.status(400).json('Usuario no recibido');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.create = create;

const update = async (req, res) => {
  try {
    if (req.body.nombre !== undefined) {
      const Usuario = await _materia.default.findByPk(req.params.id);
      Usuario.nombre = req.body.nombre;
      await Usuario.save(); //res.status(200).send({ id: Usuario.id });

      res.status(200).send({
        id: Usuario.nombre
      });
    } else {
      res.status(400).json('Nombre no recibido');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.update = update;
//# sourceMappingURL=usuario_controllers.js.map
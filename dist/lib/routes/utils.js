"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorAwareRouter = errorAwareRouter;
exports.verificarAutenticacion = verificarAutenticacion;
exports.withErrorHandling = void 0;

var _express = _interopRequireDefault(require("express"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const withErrorHandling = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

exports.withErrorHandling = withErrorHandling;

function errorAwareRouter() {
  const basicRouter = _express.default.Router();

  function newRouter(...params) {
    basicRouter(...params);
  }

  newRouter.get = function (path, controller, middleware) {
    if (middleware) {
      basicRouter.get(path, middleware, withErrorHandling(controller));
    } else {
      basicRouter.get(path, withErrorHandling(controller));
    }
  };

  newRouter.post = function (path, controller, middleware) {
    if (middleware) {
      basicRouter.post(path, middleware, withErrorHandling(controller));
    } else {
      basicRouter.post(path, withErrorHandling(controller));
    }
  };

  newRouter.patch = function (path, controller, middleware) {
    if (middleware) {
      basicRouter.patch(path, middleware, withErrorHandling(controller));
    } else {
      basicRouter.patch(path, withErrorHandling(controller));
    }
  };

  newRouter.delete = function (path, controller, middleware) {
    if (middleware) {
      basicRouter.delete(path, middleware, withErrorHandling(controller));
    } else {
      basicRouter.delete(path, withErrorHandling(controller));
    }
  };

  newRouter.put = function (path, controller, middleware) {
    if (middleware) {
      basicRouter.put(path, middleware, withErrorHandling(controller));
    } else {
      basicRouter.put(path, withErrorHandling(controller));
    }
  };

  return newRouter;
}

const parseAuthHeader = header => {
  const matches = header?.match(/Bearer (.+)/);
  return matches?.[1]; // Si la regexp funcionó, el token es el segundo elemento del array
};

async function verificarAutenticacion(req, res, next) {
  const accessToken = parseAuthHeader(req.headers.authorization);

  if (!accessToken) {
    return res.status(401).send();
  }

  try {
    const payload = await _jsonwebtoken.default.verify(accessToken, _config.JWT_SECRET);
    req.usuario = payload;
    next();
  } catch (e) {
    // TODO: manejar adecuadamente según el tipo de error. Ver https://www.npmjs.com/package/jsonwebtoken#errors--codes
    return res.status(401).json({
      mensaje: 'Token invalido. Por favor vuelva a loguearse'
    });
  }
}
//# sourceMappingURL=utils.js.map
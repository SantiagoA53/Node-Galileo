"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BCRYPT_ROUNDS = exports.JWT_DURACION = exports.JWT_SECRET = void 0;
const JWT_SECRET = process.env.JWT_SECRET || 'Un@ur2@21';
exports.JWT_SECRET = JWT_SECRET;
const JWT_DURACION = process.env.JWT_DURACION || '2h';
exports.JWT_DURACION = JWT_DURACION;
const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS) || 10;
exports.BCRYPT_ROUNDS = BCRYPT_ROUNDS;
//# sourceMappingURL=index.js.map
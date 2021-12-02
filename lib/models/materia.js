import { Model, DataTypes } from 'sequelize'
export default class Carrera extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombre: DataTypes.STRING,
        id_Carrera: DataTypes.INTEGER
      }, {
      sequelize,
      modelName: 'Materia',
    })
  }
}
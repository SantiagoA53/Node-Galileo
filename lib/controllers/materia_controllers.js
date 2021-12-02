import materia from '../models/materia'

export const index = async (req, res) => {
    const Materias = await materia.findAll({});
    res.json({ data: Materias.map((materia) => materia.toJSON()) });
}

export const show = async (req, res) => {
    const Materias = await materia.findByPk(req.params.id);
    if (Materias) {
        res.json({ data: Materias.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `No se encontro la Materias con el id ${req.param.id}` });
    }
}
export const create = async (req, res) => {
    try {
        if (req.body.nombre !== undefined) {
            const Materias = await materia.create({ nombre: req.body.nombre });
            res.status(200).send({ id: Materias.id });
        }
        else {
            res.status(400).json('nombre no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
}

export const update = async (req, res) => {
    try {
        if (req.body.nombre !== undefined) {
            const Materias = await materia.findByPk(req.params.id);
            Materias.nombre = req.body.nombre;
            await Materias.save();
            //res.status(200).send({ id: Materias.id });
            res.status(200).send({ id: Materias.nombre });
        } else {
            res.status(400).json('nombre no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
}
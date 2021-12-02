import Rol from '../models/rol'

export const index = async (req, res) => {
    const rols = await Rol.findAll({});
    res.json({ data: rols.map((rol) => rol.toJSON()) });
}

export const show = async (req, res) => {
    const rols = await Rol.findByPk(req.params.id);
    if (rols) {
        res.json({ data: rols.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `No se encontro la rols con el id ${req.param.id}` });
    }
}
export const create = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const rols = await Rol.create({ name: req.body.name });
            res.status(200).send({ id: rols.id });
        }
        else {
            res.status(400).json('name no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
}

export const update = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const rols = await Rol.findByPk(req.params.id);
            rols.name = req.body.name;
            await rols.save();
            //res.status(200).send({ id: rols.id });
            res.status(200).send({ id: rols.name });
        } else {
            res.status(400).json('name no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
}
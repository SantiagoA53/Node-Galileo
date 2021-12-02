import express from 'express';
import rol from './Roles'
import carreras from './carreras'
import materias from './materias'

const router = express.Router();

router.use('/carreras', carreras);
router.use('/roles', rol);
router.use('/materias', materias);

export default router;

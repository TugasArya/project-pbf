import express from 'express';
import {
    getAllMahasiswa,
    getMahasiswaById,
    createMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
} from '../controllers/mahasiswaController.js';

const router = express.Router();

router.get('/mahasiswa', getAllMahasiswa);
router.get('/mahasiswa/:id', getMahasiswaById);
router.post('/mahasiswa', createMahasiswa);
router.put('/mahasiswa/:id', updateMahasiswa);
router.delete('/mahasiswa/:id', deleteMahasiswa);

export default router;
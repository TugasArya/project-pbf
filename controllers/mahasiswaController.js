import mahasiswaData from '../models/mahasiswaModel.js';

// Get All Data (Read)
export const getAllMahasiswa = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Berhasil menampilkan seluruh data mahasiswa",
        total: mahasiswaData.length,
        data: mahasiswaData
    });
};

// Get Detail by ID (Detail)
export const getMahasiswaById = (req, res) => {
    const id = parseInt(req.params.id);
    const mhs = mahasiswaData.find(item => item.id === id);

    if (!mhs) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa tidak ditemukan"
        });
    }

    res.status(200).json({
        success: true,
        message: "Detail data mahasiswa ditemukan",
        data: mhs
    });
};

// Create New Data (Create)
export const createMahasiswa = (req, res) => {
    const { nim, nama, prodi } = req.body;

    if (!nim || !nama || !prodi) {
        return res.status(400).json({
            success: false,
            message: "NIM, nama, dan prodi wajib diisi"
        });
    }

    const newId = mahasiswaData.length > 0 ? mahasiswaData[mahasiswaData.length - 1].id + 1 : 1;
    const newMahasiswa = {
        id: newId,
        nim,
        nama,
        prodi
    };

    mahasiswaData.push(newMahasiswa);

    res.status(201).json({
        success: true,
        message: "Data berhasil ditambahkan",
        data: newMahasiswa
    });
};

// Update Data (Update)
export const updateMahasiswa = (req, res) => {
    const id = parseInt(req.params.id);
    const { nim, nama, prodi } = req.body;

    const mhs = mahasiswaData.find(item => item.id === id);

    if (!mhs) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa yang akan diubah tidak ditemukan"
        });
    }

    if (nim) mhs.nim = nim;
    if (nama) mhs.nama = nama;
    if (prodi) mhs.prodi = prodi;

    res.status(200).json({
        success: true,
        message: "Data berhasil diperbarui",
        data: mhs
    });
};

// Delete Data (Delete)
export const deleteMahasiswa = (req, res) => {
    const id = parseInt(req.params.id);
    const index = mahasiswaData.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa yang akan dihapus tidak ditemukan"
        });
    }

    const deletedMahasiswa = mahasiswaData.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedMahasiswa
    });
};
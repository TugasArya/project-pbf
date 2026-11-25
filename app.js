import express from 'express';
import mahasiswaRoutes from './routes/mahasiswaRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Base Route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Selamat datang di REST API Sistem Informasi Data Mahasiswa PBF"
    });
});

// API Routes
app.use('/api', mahasiswaRoutes);

// Handling 404 Route Not Found
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint tidak ditemukan"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
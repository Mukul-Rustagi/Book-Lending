const express = require('express');
const { addBook, searchBooks } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');
const { uploadFile } = require('../middleware/fileUpload');

const router = express.Router();

router.post('/add', authMiddleware, uploadFile, addBook);
router.get('/search', searchBooks);

module.exports = router;

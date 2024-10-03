const express = require('express');
const { addToFavorites, getFavorites } = require('../controllers/favouriteController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', authMiddleware, addToFavorites);
router.get('/', authMiddleware, getFavorites);

module.exports = router;

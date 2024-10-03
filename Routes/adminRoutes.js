const express = require('express');
const { addBookAsAdmin, getAllLoanRequests } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const { uploadFile } = require('../middleware/fileUpload');

const router = express.Router();

router.post('/add-book', authMiddleware, uploadFile, addBookAsAdmin);
router.get('/loan-requests', authMiddleware, getAllLoanRequests);

module.exports = router;

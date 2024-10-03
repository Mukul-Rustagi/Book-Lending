const express = require('express');
const { requestLoan, updateLoanStatus } = require('../controllers/loanController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/request', authMiddleware, requestLoan);
router.put('/update', authMiddleware, updateLoanStatus);

module.exports = router;

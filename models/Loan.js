const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  borrower: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['requested', 'approved', 'rejected'], default: 'requested' },
  requestDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Loan', LoanSchema);

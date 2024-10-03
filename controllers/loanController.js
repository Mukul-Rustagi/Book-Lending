const Loan = require('../models/Loan');
const Book = require('../models/Book');

exports.requestLoan = async (req, res) => {
  const { bookId, lenderId } = req.body;
  const borrower = req.user.id;

  try {
    const loan = new Loan({ borrower, lender: lenderId, book: bookId });
    await loan.save();
    res.json(loan);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateLoanStatus = async (req, res) => {
  const { loanId, status } = req.body;
  try {
    const loan = await Loan.findById(loanId).populate('borrower lender');
    if (!loan) return res.status(404).json({ error: 'Loan not found' });

    loan.status = status;
    await loan.save();

    res.json(loan);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const Book = require('../models/Book');
const Loan = require('../models/Loan');

exports.addBookAsAdmin = async (req, res) => {
  const { title, author, genre, available } = req.body;
  const adminId = req.user.id;

  try {
    const book = new Book({
      title,
      author,
      genre,
      available,
      owner: adminId,
      cover: req.filePath  // Cover path from file upload middleware
    });
    await book.save();
    res.json({ message: 'Book added by admin', book });
  } catch (error) {
    console.error(error)
    console.log(error)
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllLoanRequests = async (req, res) => {
  try {
    const loans = await Loan.find().populate('book borrower lender');
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

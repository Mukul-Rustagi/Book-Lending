const Book = require('../models/Book');

exports.addBook = async (req, res) => {
  const { title, author, genre } = req.body;
  const owner = req.user.id;
  try {
    const book = new Book({
      title,
      author,
      genre,
      owner,
      cover: req.filePath  // File path saved from fileUpload middleware
    });
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.searchBooks = async (req, res) => {
  const { query } = req.query;
  try {
    const books = await Book.find({
      $or: [
        { title: new RegExp(query, 'i') },
        { author: new RegExp(query, 'i') },
        { genre: new RegExp(query, 'i') }
      ]
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

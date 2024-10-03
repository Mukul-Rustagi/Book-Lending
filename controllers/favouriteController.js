const Favorite = require('../models/Favourite');

exports.addToFavorites = async (req, res) => {
  const { bookId } = req.body;
  const userId = req.user.id;

  try {
    const favorite = new Favorite({ user: userId, book: bookId });
    await favorite.save();
    res.json({ message: 'Book added to favorites', favorite });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getFavorites = async (req, res) => {
  const userId = req.user.id;

  try {
    const favorites = await Favorite.find({ user: userId }).populate('book');
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

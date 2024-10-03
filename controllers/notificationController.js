const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ recipient: req.user.id, read: false }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.markAsRead = async (req, res) => {
  const { notificationId } = req.body;
  try {
    const notification = await Notification.findById(notificationId);
    if (!notification) return res.status(404).json({ error: 'Notification not found' });

    notification.read = true;
    await notification.save();
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

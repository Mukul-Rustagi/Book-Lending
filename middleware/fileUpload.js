const path = require('path');
const fs = require('fs');

exports.uploadFile = (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.cover;  // Assuming 'cover' is the form field name
  const uploadPath = path.join(__dirname, '../uploads', file.name);

  file.mv(uploadPath, (err) => {
    if (err) return res.status(500).send(err);
    
    req.filePath = uploadPath;  // Save the file path to request object
    next();
  });
};

const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const bookRoutes = require('./Routes/bookRoutes');
const favoriteRoutes = require('./Routes/favouriteRoutes');
const loanRoutes = require('./Routes/loanRoutes');
const notificationRoutes = require('./Routes/notificationRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const userRoutes = require('./Routes/userRoutes');


dotenv.config();
const app = express();

app.use(express.json());
app.use(fileUpload());

// Database Connection
const dbConnect=require("./config/database");
dbConnect();
// Routes
app.use('/api/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/loans', loanRoutes);
app.use('/notifications', notificationRoutes);
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cors());
app.use(express.json());

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.listen(process.env.PORT || 5000);

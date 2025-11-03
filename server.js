const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(3000, () => console.log('Server running on port 3000'));

const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

const sampleProducts = [
  {
    name: "Winter Jacket",
    price: 200,
    category: "Apparel",
    variants: [
      { color: "Black", size: "S", stock: 8 },
      { color: "Gray", size: "M", stock: 12 }
    ]
  },
  {
    name: "Smartphone",
    price: 699,
    category: "Electronics",
    variants: []
  },
  {
    name: "Running Shoes",
    price: 120,
    category: "Footwear",
    variants: [
      { color: "Red", size: "M", stock: 10 },
      { color: "Blue", size: "L", stock: 5 }
    ]
  }
];

Product.insertMany(sampleProducts).then(() => {
  console.log("Data inserted");
  mongoose.connection.close();
});

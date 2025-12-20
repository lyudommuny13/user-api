require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connect DB Success");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;

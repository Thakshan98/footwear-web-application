const express = require("express");
const app = express();
require('dotenv').config();
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");

const productRoutes = require("./routes/productRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const uploadRoutes = require("./routes/uploadRoutes.js");
const feedbackRoutes = require("./routes/feedbackRoutes.js");



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("DB connected succcesfully and listening to "+process.env.PORT);
    });
})
.catch((error)=>console.log(error));



if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  
  app.use(express.json())
  
  app.use('/api/products', productRoutes);
  app.use('/api/categories', categoryRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/orders', orderRoutes);
  app.use('/api/feedback', feedbackRoutes);
  app.use('/api/upload', uploadRoutes);
  
 
  
//   const __dirname = path.resolve();
//   app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
  
//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/frontend/build')))
  
//     app.get('*', (req, res) =>
//       res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//     )
//   } else {
//     app.get('/', (req, res) => {
//       res.send('API is running....')
//     })
//   }
  

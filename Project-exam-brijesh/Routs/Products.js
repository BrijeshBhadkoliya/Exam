const express = require('express');
const {Product } = require('../controller/authcontroller');
const {ProductData , viewProduct , deleteproduct , Productedit , updateProductData} =  require('../controller/Productcontroller');
const multer = require('multer');
 
const Router = express.Router()
 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage }).single('image')

Router.get('/' ,Product )
Router.post('/ProductData',upload,ProductData )
Router.get('/viewProduct',viewProduct )
Router.get('/deleteproduct' ,deleteproduct)
Router.get('/Productedit' ,Productedit)
Router.post('/updateProductData',upload,updateProductData )







 module.exports = Router;
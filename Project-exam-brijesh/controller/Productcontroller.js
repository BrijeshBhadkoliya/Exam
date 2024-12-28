const { log } = require('console');
const ProductModel = require('../Models/ProductModel') 
 const fs = require('fs')

const ProductData = async(req , res) =>{
    const {name,price ,qty , description} = req.body;
     const image = req.file.path
   console.log(req.body, image);
      await ProductModel.create({
        name:name,
        Price:price,
        qt:qty, 
        description: description,
        Image: image
      })
    return res.redirect('/Product');
}
 
const viewProduct = async(req , res) =>{
    const  users =    await ProductModel.find({})
    return res.render('Productview', {users})
}

const deleteproduct = async(req , res) =>{
    const id  = req.query.id;
 
    try {
        let single = await ProductModel.findById(id)
        fs.unlinkSync(single.Image)
     await ProductModel.findByIdAndDelete(id);

     
      
       return res.redirect('/Product/viewProduct');

    } catch (err) {
        console.log(err);
        
       return false
    }
}

const Productedit = async (req,res) =>{
    const id =req.query.id;
  
    
    const Productdata = await ProductModel.findById(id);
     console.log(Productdata);
   
    return res.render('Productedit', {Productdata});
  }

const updateProductData = async (req, res) =>{
    try {
        if (req.file) {
            const {name,price ,qty , description , editid} = req.body;
            const image = req.file.path
            let single = await ProductModel.findById(editid)
        
           
            
            
            fs.unlinkSync(single.Image)
            
            await ProductModel.findByIdAndUpdate(editid, {   name:name,
                Price:price,
                qt:qty, 
                description: description,
                Image: image
                
            });
            console.log('Data updated');
            return res.redirect('/Product/viewProduct');

        } else {
            const {name,price ,qty , description , editid} = req.body;
            const image = req.file.path
        
            let single = await ProductModel.findById(editid)
             
            
      
            await DataModel.findByIdAndUpdate(editid, {  name:name,
                Price:price,
                qt:qty, 
                description: description,
                image: single.image
                });
                console.log('Data updated');
                return res.redirect('/Product/viewProduct');

        }
    } catch (err) {
        console.log(err);
        return false;
    }
 
}

module.exports =  {ProductData , viewProduct, deleteproduct , Productedit , updateProductData}
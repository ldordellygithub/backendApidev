
const  express = require('express');

const  productService = require('../services/servicespr')
const  router = express.Router();
const  Validation = require('../middleware/validatorHendler')
const {schemaProductCreation,schemaUpdated,getProductSchema} = require('../schema/schemaproduct')

//   router   for  get product 

router.get('/', async(req,res,next) => {
   try{
    const  products = await productService.getAllproducts(req,res);
    res.json(products);
   }catch(err){
      next(err)
   }
})


router.get('/:id', Validation(getProductSchema,'params'), 
   async (req, res) => {
   const  getOne = await productService.getOneProduct(req, res);
   return getOne;
});


///   create  new  rout  methot  Post

router.post('/', Validation(schemaProductCreation, 'body'),
   async(req, res) => {
   const  createNew = await productService.CreateNewProduct(req, res);
   return createNew

});

//   ruta  para  patch 


router.patch('/:id', 
   Validation(getProductSchema,'params'),
   Validation(schemaUpdated, 'body'),
   async (req, res) => {
   const  update = await productService.UpdateProduct(req, res);
   res.json(update);

})

//   rout  for  deleting

router.delete('/:id', async (req, res) => {
   const deleteProduc =  await productService.deleteProduct(req, res);
   return deleteProduc;
})




module.exports =router;
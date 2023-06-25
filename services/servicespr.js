const   faker  =  require('faker');
const  boom = require('@hapi/boom');
const  getAllproducts = async (req, res) => {
    try{
      
        const  products = [];
        const  {size} = req.query
        const  limit = size || 5 
        for(let i = 0; i<limit; i++){
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(),10),
            image: faker.image.imageUrl(),
        })
       
    }
    return products;
    }catch(err){
        console.log(err);
    }
    
    res.json({
        "success": true,
    });
}


const  CreateNewProduct = async(req, res) => {

    try {
    const body = req.body;
    res.json({
        ok: true,
        data: body
    })
} catch(err){
    console.log(err);
}
}


const UpdateProduct = async (req, res) => {
    try {
    const {id} =  req.params
    
    // if(id != 1){
    //     throw boom.notFound('Product not found')
    // }
    const  body = req.body

    res.json({
        message: 'update successful',
        product: body,
        id,
    })
}catch(err){
    console.log(err);
}
}

const  deleteProduct = async (req, res) => {
    try {
    const  {id} = req.params
 
    res.json({
        message: 'delete successful',
        id
    })
}catch (err){
    console.log(err);
}
}


const getOneProduct = async (req, res) => {

    try{
    const {id} = req.params
 
    res.status(200).json({
        'id': id,
        'name': 'teclado',
        'price': 2000,
        'categories': 'tecnologia'
    })
}catch(error) {
    console.log(error);
}

}

module.exports = {
    getAllproducts,
    CreateNewProduct,
    UpdateProduct,
    deleteProduct,
    getOneProduct
}
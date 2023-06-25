const   productRouter  =  require('../routes/products');
const   UserRouter  =  require('../routes/users');

const  express = require('express');


function createApiRouter(app) {

    const  router =  express.Router();
    app.use('/api/v1', router)
    router.use('/products', productRouter)
    router.use('/users', UserRouter)
}


module.exports = createApiRouter;


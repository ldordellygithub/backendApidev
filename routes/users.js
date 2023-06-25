
const  express = require('express');
const  servicesUser = require('../services/serviceuser');
const  router = express.Router();

router.get('/', async (req, res) => {

    const  getUsers = await servicesUser.getAllUsers(req,res);
    return getUsers
 
 });
 

module.exports = router;
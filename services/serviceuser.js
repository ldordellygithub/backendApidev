const   getAllUsers = async  (req, res) => {

    const {limit, offset} = req.query
 
    if(limit && offset) {
     res.json({
         limit,
         offset
     })
 
    }else{
     res.send("no  hay  ningun  parametro")
    }
}


module.exports = {
    getAllUsers
}
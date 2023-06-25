const  express = require('express');
const  cors = require('cors');
const {errorLogs,handleError} = require('./middleware/error.handler');
const  apiRouter = require('./server');
const  app = express();
const  port  =  process.env.PORT || 3000;

app.use(express.json());///  

app.get('/',(req, res) => {
    res.send("hola");
});


app.use(cors());

apiRouter(app);
app.use(handleError);
app.use(errorLogs);


app.listen(port, (req, res) =>{
    console.log("scannig  in  the port >>> " + port);
});
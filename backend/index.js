const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routers/AuthRouter');
const ProductRouter = require('./Routers/ProductRouter');


require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;



app.use(bodyParser.json());

app.use(cors());
app.use('/auth',AuthRouter);
app.use('/products',ProductRouter);

app.get('/ping',(req,res)=> {
    res.send(new Date().toString());
});

app.listen(PORT,() => {
    console.log(`Sever is running on ${PORT}`)
})
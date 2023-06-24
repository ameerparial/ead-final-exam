
const express = require('express');
const app = express();
const cors = require('cors');

const Connection = require('./Controllers/Connection');
const ReceipeSchema = require('./Models/Receipe');

const receipes =[];

app.use(express.urlencoded({extended:true}));
app.use(cors());

app.post('/AddReceipe', async (req, res)=>{
    const receipe = await ReceipeSchema.create(req.body);
    console.log('Add Receipe');
    console.log(receipe);
    res.redirect('http://localhost:3000/showreceipes');
});

app.get('/showreceipes', async (req, res)=>{
    console.log('Show Products');
    const receipe = await ReceipeSchema.find();  
    res.json(receipe);
})

app.get('/receipedetails/:id', (req, res)=>{
    console.log(req.params.id);
})

const server = app.listen(2700,()=>{
    Connection();
    console.log('Server is listening at the port '+server.address().port);
} )
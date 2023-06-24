
const express = require('express');
const app = express();
const cors = require('cors');

const Connection = require('./Controllers/Connection');
const ReceipeSchema = require('./Models/Receipe');


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

app.get('/receipedetails/:id', async (req, res)=>{
    console.log(req.params.id);
    const receipe = await ReceipeSchema.findById(req.params.id);
    res.json(receipe);
})

app.get('/receipedelete/:id', async (req, res)=>{
    console.log('Delete Product');
    const id = req.params.id;
    console.log('Sucessfully deleted');
    await ReceipeSchema.deleteOne({_id:id});
    res.redirect('http://localhost:3000/showreceipes');

})
app.get('/receipeupdate/:id', async (req, res)=>{
    console.log(req.params.body);
    const id = req.params.id;
    const receipe = await ReceipeSchema.findById(req.params.id);
    console.log(receipe);
    // res.send('Data is being updated with id : '+id);
    res.json(receipe);
})

app.post('/updateme/:id', async (req, res)=>{
    const id = req.params.id;
    const newProduct = await ReceipeSchema.updateOne({_id:id}, {$set:{title:req.body.title, des:req.body.des, ing:req.body.ing, ins:req.body.ins}});
    console.log('Receipe Updated');
    // console.log(newProduct);
    res.redirect('http://localhost:3000/showreceipes');    
})

const server = app.listen(2700,()=>{
    Connection();
    console.log('Server is listening at the port '+server.address().port);
} )

const express = require('express');

const app = express();

const cors = require('cors');


const receipes =[];

app.use(express.urlencoded({extended:true}));
app.use(cors());

app.post('/AddReceipe', (req, res)=>{

    receipes.push(req.body);
    res.redirect('http://localhost:3000/showreceipes');
});

app.get('/showreceipes', (req, res)=>{
    console.log('Yes');
    res.json(receipes);
})

app.get('/receipedetails/:id', (req, res)=>{
    console.log(req.params.id);
})

const server = app.listen(2700,()=>{
    console.log('Server is listening at the port '+server.address().port);
} )
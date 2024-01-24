const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./User')
 
const app = express()
app.use(cors())
app.use(express.json())
 
 
mongoose.connect("mongodb+srv://wrahul2002:pass123@cluster0.ahlntri.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

 
app.get('/', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
 
 
app.get('/get/:id', (req, res) => {
    const id = req.params.id
    UserModel.findById({_id: id})
    .then(post => res.json(post))
    .catch(err => console.log(err))
})
 
app.post('/create', (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
 
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        prod_Name: req.body.prod_Name,
        prod_id: req.body.prod_id,
        prod_price: req.body.prod_price,
        prod_desc: req.body.prod_desc
    })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
 
app.delete('/deleteuser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})
 
app.listen(3001, () => {
    console.log("Server is Running");
})

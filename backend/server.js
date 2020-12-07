import express from 'express'
// This is the local JSON
import namethatobjectdata from './data/namethatobjectdata.js'

const app = express()
app.get('/',function(req,res){
    res.send('server running on 5000');
})
 
// This sends the json object of products
app.get('/api/question',function(req,res){
    // res.json(products);
})

app.get('/namethatobjectstart',function(req,res){
    res.json(namethatobjectdata);
})

app.listen(5000, console.log('server running on 5000'));
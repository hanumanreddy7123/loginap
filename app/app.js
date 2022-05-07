var express=require("express")
var verify=require('./verifyToken')
let co=require('cors')
var jwt=require('jsonwebtoken')
const verifyToken = require("./verifyToken")
var mongoclient=require("mongodb").MongoClient
var app=express()
app.use(co())
app.use(express.json())

mongoclient.connect('mongodb://localhost:27017',(err,client)=>
{
    if(err)
    {
        console.log("error")
    }
    else
    {
         db=client.db('student')
        console.log("connected" )
    }
})
app.get('/home',(req,res)=>
{
    res.send("homepage")
    res.end()
})
app.get('/emps',(req,res)=>
{
    db.collection('std').find().toArray((err,items)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
         res.send(JSON.stringify(items))
         res.end()
        }
    })
})
app.get('/index',(req,res)=>
{
    res.sendFile(__dirname +'./index.html')
})

app.post('/addemps',(req,res)=>
{
    db.collection('std').insertOne(req.body)
    res.end()
})
app.patch('/updateemps/:id',(req,res)=>
{
       var id=req.params.id
       db.collection('std').updateOne({"_id":id},{$set:{"name":req.body.name}})
       res.status(200).send(id)
       res.end()
})
app.delete('/deleteemps/:id',(req,res)=>
{
       var id=req.params.id
       db.collection('std').remove({"_id":id})
    //    res.status(200).json(req.body)
       res.end()
})
app.get('/spemps/:id',(req,res)=>
{
       var id=req.params.id
       db.collection('std').find({"_id":id}).toArray((err,items)=>
       {
           res.send(JSON.stringify(items))
           res.end()
       })
})
app.post('/login',(req,res)=>
{
    const{username}=req.body
    const{password}=req.body
    db.collection('user').insertOne({"username":username,"password":password})
    const token=jwt.sign({username},"test1234")
    res.json({token})

})
app.get('/login',verifyToken,(req,res)=>
{
    db.collection('user').find().toArray((err,data)=>
    {
        if(err)
        {
            return res.json(err)
        }
        else
        {
            return res.json(data)
        }
    })
})
app.listen(2000,()=>
{
    console.log("server started")
})

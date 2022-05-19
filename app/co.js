var express=require('express')
var router=require('./routes/std')
var schema=require('./models/mo')
var mongoose=require('mongoose')
var app=express()
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/student',()=>
{
    console.log("connected to db")
})
var db=mongoose.connection
app.use('/',router)
var ob = new schema({
    name:"ramu",
    age:20
})
// app.get('/home',(req,res)=>
// {

//    res.send("home page")
// })
// app.get('/emps',async(req,res)=>
// {
//      var data=await schema.find()
//      res.send(data)
// })
// app.post('/addemps',(req,res)=>
// {
//      ob.save()
//     // db.schema.insertOne({name:"ram"})
//      res.send("data inserted")
// })
// app.patch('/updateemps/:id',async(req,res)=>
// {
//     var id=req.params.id 
//     var {name,age}=req.body
//     var std=await schema.findByIdAndUpdate(id,{name},{new:true})
//     res.send(std)
// })
// app.delete('/deleteemps/:id',async(req,res)=>
// {
//     var id=req.params.id
//     var std1=await schema.deleteOne({id:"_id"})
//     res.send("deleted successfully")
// })
// app.get('/emps/:id',async (req,res)=>
// {
//     var {id}=req.params
//     var std2=await schema.findById(id)
//     res.send(std2)
// })
// app.put('/put/:id',async (req,res)=>
// {
//     var {id}=req.params
//     var {name}=req.body
//     var std=await schema.findOneAndReplace (id,{name},{new:true})
//     res.send(std)
// })
app.listen('3000',()=>{
    console.log("server started")
})
const schema = require("../models/mo")

var ob = new schema({
    name:"ramu",
    age:20
})
var emps=async (req,res)=>
{
    var std=await schema.find()
    res.send(std)
}
var add=(req,res)=>
{
    ob.save()
    res.send("data inserted")
}
var update=async (req,res)=>
{
    var id=req.params.id
    var{name}=req.body
    var std=await schema.findByIdAndUpdate(id,{name},{new:true})
    res.send(std)
}
var del=async (req,res)=>
{
    var id=req.params.id
    var std=await schema.deleteOne({id:"_id"})
    res.send(" data deleted")
}
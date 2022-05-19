var express=require('express')
var {emps,add,update,del}=require('../controllers/std1')
var router=express.Router()
router.get('/emps',emps)
router.post('/addemps',add)
router.patch('/updateemps/:id',update)
router.delete('/deleteemps/:id',del)
module.exports=std
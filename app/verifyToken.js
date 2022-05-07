const jwt=require("jsonwebtoken")
function verifyToken(req,res,next)
{
   let token=req.headers['authorization']
   if(token)
   {
       token=token.split(' ')[1]
       jwt.verify(token,'test1234',(err,code)=>
       {
           if(err)
           {
               return res.json({
                   success:false,
                   message:"token is not valid"
               })
           }
           else
           {
               next()
           }
       })
   }
   else
   {
       return res.json({
           success:false,
           message:"Atoken is required for authentication"
       })
   }
}
module.exports=verifyToken
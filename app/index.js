
async function data()
{
   let url="http://localhost:2000/emps"
   let res=await fetch(url)
   let res1=await res.json()
  res1.map((ele)=>
  {
      let {_id,name}=ele
      console.log(_id,name)
  })
}

async function post()
{
    var ip1=document.getElementById("no").value
    var ip2=document.getElementById("name").value
    var obj=
    {
        _id:ip1,
        name:ip2
    }
    let url="http://localhost:2000/addemps"
    await fetch(url,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)

    })
}
                                                                                                                          
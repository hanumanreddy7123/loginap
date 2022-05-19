import student from "./ar"
function Array()
{
    return(
        <div className="container">
        <table className="table table-hover table-bordered border border-info">
        <thead>
          <tr>
            <th scope="col"> Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
            {
        student.map(ele=>
    {
     return <tr key={ele.name}>
         <td>{ele.name}</td>
         <td>{ele.age}</td>
         </tr>
    })
}
        </tbody>
      </table>
      </div>
      
    )
}
export default Array

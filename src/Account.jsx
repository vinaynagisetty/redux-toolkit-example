import { useSelector } from "react-redux";

function Account(){
 let data= useSelector(
    (state)=>state
  )
  console.log(data);
    return(
      <>
     <div className="container">
      <h2 className="text-primary">Account details</h2>
      <table className="table table-bordered w-50">
        <thead>
          <tr>
          <th>Full Name</th>
          <th>Amount</th>
          <th>Mobile Number</th>
          </tr>
     
        </thead>
        <tbody>
          <tr>
            <td>{data.user.fullName}</td>
            <td>{data.user.amount}</td>
            <td>{data.user.mobileNumber}</td>
          </tr>
        </tbody>

      </table>
      <h2 className="text-primary">Transaction details</h2>
      <table className="table table-bordered w-50">
        <thead>
          <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Time Stamp</th> 
          </tr>
     
        </thead>
        <tbody>
          {
            data.transactions.map(
              (item,index)=>{
                return <tr key={index} >
                 <td>{item.name}</td>
                 <td>{item.type}</td>
                 <td>{item.amount}</td>
                 <td>{item.timestamp}</td>
                </tr>
              }
            )
          }
          {/* <tr>
            <td>{data.user.fullName}</td>
            <td>{data.user.amount}</td>
            <td>{data.user.mobileNumber}</td>
          </tr> */}
        </tbody>

      </table>

     </div>
      </>
    )
  }
  export default Account;
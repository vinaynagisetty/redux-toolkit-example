import { useSelector } from "react-redux";

function Account(){
 let data= useSelector(
    (state)=>state.user
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
            <td>{data.fullName}</td>
            <td>{data.amount}</td>
            <td>{data.mobileNumber}</td>
          </tr>
        </tbody>

      </table>

     </div>
      </>
    )
  }
  export default Account;
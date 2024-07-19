import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdraw,deposit,updateName,updateMobileNumber, updateTransactionDetails} from "./store";

function Form(){
    let [amount,setAmount]=useState()
    let [name,setName]=useState('')
    let [mobile,setMobile]=useState(null)
    let dispatch= useDispatch();
   let fullName= useSelector(
    (state)=>state.user.fullName
   )
    return (
   
    
        <>
         <h1>Form component</h1>
          <div className="row  mb-2">
            <div className="col-5">
                <input type="number" value={amount} placeholder="Enter amount" className="form-control" 
                onChange={
                    (e)=>{
                        setAmount(e.target.value)
                    }
                } />
            </div>
            <button className="btn btn-primary col-1 mx-2"  onClick={
                ()=>{
                    dispatch(deposit(amount));
                    dispatch(updateTransactionDetails({
                    type:"Credit",
                    amount:amount,
                    name:fullName,
                    timestamp:new Date().toISOString()

                    }))
                    setAmount("")
                }
            }>Deposit</button>
            <button className="btn btn-danger col-1 mx-2" 
            onClick={
                ()=>{
                    dispatch(withdraw(amount));
                    dispatch(updateTransactionDetails({
                        type:"Debit",
                        amount:amount,
                        name:fullName,
                        timestamp:new Date().toISOString()
    
                        }))
                    setAmount("")
                }
            }>Withdrawn</button>
          </div>
          <div className="row mb-2">
            <div className="col-5">
                <input type="text" value={name} placeholder="Enter Full Name" className="form-control" 
                onChange={
                    (e)=>{
                        setName(e.target.value)
                    }
                } />
            </div>
            <button className="btn btn-primary col-1 mx-2"   onClick={
                ()=>{
                    dispatch(updateName(name));
                    setName("")
                }
            }>Update</button>
          
          </div>
          <div className="row  mb-2">
            <div className="col-5">
                <input type="number" value={mobile} placeholder="Enter Mobile Number" className="form-control" 
                onChange={
                    (e)=>{
                        setMobile(e.target.value)
                    }
                } />
            </div>
            <button className="btn btn-primary col-1 mx-2" 
             onClick={
                ()=>{
                    dispatch(updateMobileNumber(mobile));
                    setMobile("")
                }
            }>Update</button>
          
          </div>
        </>
    )
}
export default Form;
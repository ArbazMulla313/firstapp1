import React,{useState} from 'react'

export const StateMang = () => {
    const [data,setData]=useState("")
    const [data1,setData1]=useState("")
    const [data2,setData2]=useState("")
    const [data3,setData3]=useState("")
    const [data4,setData4]=useState("")
    const [data5,setData5]=useState("")
    const [data6,setData6]=useState("")
    const [data7,setData7]=useState("")
    console.log(data)
    
  return (
    <div>
        <h1>Registration Form</h1>
        <label htmlFor="">First Name:</label>
       <input  type="text" onChange={(e)=>setData(e.target.value)} /> <br /><br />
       <label htmlFor="">Last Name:</label>
       <input  type="text" onChange={(e)=>setData1(e.target.value)} /><br /><br />
       <label htmlFor="">Mobile No:</label>
       <input  type="number" onChange={(e)=>setData2(e.target.value)} /><br /><br />
       <label htmlFor="">Email ID:</label>
       <input  type="text" onChange={(e)=>setData3(e.target.value)} /><br /><br />
       <label htmlFor="">Address:</label>
       <input  type="text" onChange={(e)=>setData4(e.target.value)} /><br /><br />
       <label htmlFor="">Pincode:</label>
       <input  type="number" onChange={(e)=>setData5(e.target.value)} /><br /><br />
       <label htmlFor="">City:</label>
       <input  type="text" onChange={(e)=>setData6(e.target.value)} /><br /><br />
       <label htmlFor="">State:</label>
       <input  type="text" onChange={(e)=>setData7(e.target.value)} /><br /><br />

        
        <h1>First Name:{data}</h1>
        <h1>Last Name:{data1}</h1>
        <h1>Mobile No:{data2}</h1>
        <h1>Email ID:{data3}</h1>        
        <h1>Address:{data4}</h1>        
        <h1>Pincode:{data5}</h1>        
        <h1>City:{data6}</h1>        
        <h1>State:{data7}</h1>        

        
        </div>
  )
}

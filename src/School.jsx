import { Alert, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

export const School = () => {
    const [data,setData]=useState("")
    const [data1,setData1]=useState("")
    const [data2,setData2]=useState("")
    const [data3,setData3]=useState("")
    const [data4,setData4]=useState("")
    const [data5,setData5]=useState("")
  const handleSubmit=()=>{
    console.log("this is Working")
    // const obj={
        
        // fname:data,
        // mname:data1,
        // lname:data2,
        // Adress:data3,
        // MobileNO:data4,
        // RollNo:data5


    }
  

  return (
    <div>
        <h1>School Admission</h1>
     <Grid container spacing={4}>
        
     <Grid iteam xs={3}>
        <TextField label="Name of Student"onChange={(e)=>setData(e.target.value)}/> 
        </Grid>
        <Grid item xs={3}>
            <TextField label="Father Name" onChange={(e)=>setData1(e.target.value)}/>
        </Grid>
        <Grid item xs={3}>
            <TextField label="Last Name" onChange={(e)=>setData2(e.target.value)}/>
        </Grid>
        <Grid item xs={3}>
            <TextField label="Adress" onChange={(e)=>setData3(e.target.value)}/>
        </Grid>
        <Grid item xs={3}>
            <TextField label="Mobile No" onChange={(e)=>setData4(e.target.value)}/>
        </Grid>
        <Grid item xs={4}>
            <TextField label="Roll No" onChange={(e)=>setData5(e.target.value)}/>
        </Grid>
        <Grid item xs={6}>
            <Button variant='contained' color='success' onClick={handleSubmit}>Submit</Button>

        </Grid>

     </Grid>
            

    </div>
  )
  }

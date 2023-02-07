import React ,{useState} from 'react'
import { Button, Card, CardContent, Grid, TextField } from '@mui/material'


export const SchoolForm = () => {
    const [Name,setName]=useState()
    const [Mobile,setMobile]=useState()
    const [EmailID,setEmailID]=useState()
    const [Password,setPassword]=useState()
    const [data,setData]=useState([])


    const handleSubmit =()=>{
        const obj={
            FirstName:Name,
            MobileNo:Mobile,
            EmailID:EmailID,
            conformPassword:Password
        };
        setData([...data,obj])


    }
    console.log(data)

    const handleDelete=(index)=>{
      const deleteData=data.filter((item,ind)=>ind !=index)
      setData(deleteData)
    }
    
  return (
    <div>
        <h1>School Registraion Form</h1>
        <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
         <TextField label="Name" onChange={(e)=>setName(e.target.value)}/>
        </Grid>
        <Grid item xs={12} md={3}>
         <TextField label="Mobile" type="number"onChange={(e)=>setMobile(e.target.value)}/>
        </Grid>
        <Grid item xs={12} md={3}>
         <TextField label="Email-ID" type="email"onChange={(e)=>setEmailID(e.target.value)}/>
        </Grid>
        <Grid item xs={12} md={3}>
         <TextField label="Password" type="password"onChange={(e)=>setPassword(e.target.value)}/>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={6}></Grid>
        
        <Button variant='contained' color='error' onClick={handleSubmit}>Submit</Button>

        </Grid>
        <Grid container spacing={3}>
        {data.map((item,index)=>{
          return(
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <h1>Name:{item.FirstName}</h1>  
                  <h1>Mobile:{item.MobileNo}</h1>
                  <h1>EmailID:{item.EmailID}</h1>
                  <h1>Password:{item.conformPassword}</h1>
                  <Button variant='contained' color='error' onClick={()=>handleDelete(index)}>Delete</Button>
                </CardContent>
              </Card>
              </Grid>
            
          )
        })}
        
        </Grid>
        
        

    </div>
  )
}


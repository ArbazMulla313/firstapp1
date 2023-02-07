import { Button, TextField } from '@mui/material';
import React from 'react'
import  SecondComp  from './SecondComp'

 const FirstComp = () => {
  return (
    <div>
        <p>FirstComp</p>
        <TextField label='First Name' type="text" className='input' ></TextField>
        <Button variant="contained">First</Button>
        <SecondComp/>

        </div>
        
  )
}
export default FirstComp;

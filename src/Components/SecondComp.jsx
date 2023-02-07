import { Button, TextField } from '@mui/material';
import React from 'react'
import ThirdComp from './ThirdComp';

 const SecondComp = () => {
  return (
    <div>

        <p>SecondComp</p>
        <TextField label='Second Name' type="text" className='input' ></TextField>
        <Button variant="contained">Second</Button>
        <ThirdComp/>
        
        </div>
  )
}
export default SecondComp;

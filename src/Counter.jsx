import { Button } from '@mui/material'
import { clear } from '@testing-library/user-event/dist/clear'
import React, { useState } from 'react'

export const Counter=()=>{
         const [countVal,setCountVal] = useState(0) 

        //  const handleIncreament=()=>{
        //     setCountVal(count=> count +1)
        //  }
        // const handleDecreament=()=>{
        //     setCountVal(count=> count 0)
        // }
        const handleDecreament=(val)=>{
        
        setCountVal(countVal+val)
    }

    return(
        <div>
            <h1>Tasbi</h1>
         {/* <Button variant='contained' color='success' onClick={()=>setCountVal(countVal + 1)}>+</Button> */}
         <Button variant='contained' color='success' onClick={()=>handleDecreament(+10)}>+</Button>
         <h1>{countVal}</h1>
         {/* <Button variant='contained' color='error'  onClick={()=>setCountVal(countVal - 1)}>-</Button> */}
         <Button variant='contained' color='error'  onClick={()=>handleDecreament(-1)}>-</Button>
         
        
        </div>
    )
}
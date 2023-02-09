import { Button } from '@mui/material'
import React, { useState } from 'react'

const AA = () => {
    const [countVal,setCountVal] = useState(0) 
    const handleDecreament=(val)=>{
        if(countVal>0){
        setCountVal(countVal+val)
    }else{
      setCountVal(0)
    }
    }
  return (
    <div>
        <h1>Zero Calculate</h1>
        <h1>Zero Calculate11</h1>
 <Button variant='contained' color='success' onClick={()=>handleDecreament(+10)}>+</Button>
 <h1>{countVal}</h1>
  <Button variant='contained' color='error'  onClick={()=>handleDecreament(-1)}>-</Button>
    </div>
  )
  }

export default AA
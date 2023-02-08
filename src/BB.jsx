import { ClassNames } from '@emotion/react'
import { Button } from '@mui/material'
import React, { useState } from 'react'

const BB = () => {
    const [countVal,setCountVal] = useState(0) 

         const handleIncreament=()=>{
            
            
            setCountVal(count=> count +10)
         }
        const handleDecreament=()=>{
            
            if(countVal >  0){
            setCountVal(count=> count -1)
            }else {
                
             setCountVal(0)
            }
        }
    
  return (
    <div>
         <h1>BB</h1>
         <p className='ASS'>{}</p>
         
         <Button variant='contained' color='success' onClick={handleIncreament} >+</Button>
         <h1>{countVal}</h1>
          <Button variant='contained' color='error'  onClick={handleDecreament}>-</Button>
    
    </div>
  )
}

export default BB
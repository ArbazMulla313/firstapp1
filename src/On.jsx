import { Button } from '@mui/material'
import React, { useState } from 'react'

const On = () => {
    
        const [Val,setVal] = useState(0) 
        
        return (
            <div>
        <h1></h1>
        <img src="./1.webp" alt="" />
        <Button variant='contained' onClick={Val}>ON</Button>
        <h1>{Val}</h1>
        <Button>OFF</Button>
    </div>
  )
}

export default On
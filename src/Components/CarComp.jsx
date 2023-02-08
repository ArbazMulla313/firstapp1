import React from 'react'

const CarComp = (props) => {                                         
  return (
    <div>
        <h1>CarName:{props.Car1}</h1>
        <h1>CarModel:{props.Car2}</h1>
        <h1>CarColor:{props.Car3}</h1>
        <h1>CarType:{props.Car4}</h1>
        
    </div>
  )
}

export default CarComp
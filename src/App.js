import logo from './logo.svg';
import './App.css';
import './Meta.jsx'
import { Meta } from './Meta.jsx';
import Classcomp from './Components/ClassComp';
import FirstComp from './Components/FirstComp';
import { StateMang } from './StateMang';
import { School } from './School';
import { SchoolForm } from './SchoolForm';
import { Todu } from './Todu';
import {Counter} from './Counter';
import Props from './Props';
import CarComp from './Components/CarComp';

function App() {
  // const lName="Arbaz"
  // const SecondLname="Mulla"
  // const Adress11="Hirekodi Dist:Belgaum"
  // const fName="Amer";
  // const SecondFname="Mujawar"
  // const Adress12="Chikodi Dist:Belgaum"
  // const sName="Sohel";
  // const SecondSname="Pathan"
  // const Adress13="Nippanni Dist:Belgaum"
  // const tName="Abrar";
  // const SecondTname="Desai"
  // const Adress14="Kolhapur Dist:Belgaum"
  const CarName="Maruti Suzuki"
  const CarModel="2022"
  const CarColor="Red"
  const CarType="Sports"

  return (
    <div className="App">
      {/* <FirstComp/> */}
      {/* <Meta/> */}
      {/* <Classcomp/> */}
      {/* <StateMang/> */}
      {/* <School/> */}
      {/* <SchoolForm/> */}
      {/* <Todu/> */}
      {/* <Counter/> */}
      {/* <Props Name1={tName} Name2={SecondLname} Adress={Adress11}/>
      <Props Name1={fName}Name2={SecondFname} Adress={Adress12}/>
      <Props Name1={sName}Name2={SecondSname}Adress={Adress13}/>
      <Props Name1={lName}Name2={SecondTname}Adress={Adress14}/> */}
      
      <CarComp 
      Car1={CarName} 
      Car2={CarModel}
      Car3={CarColor}
      Car4={CarType}/>


      

      

      
  
      
    </div>
  );
}

export default App;

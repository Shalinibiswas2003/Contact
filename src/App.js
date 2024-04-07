import './App.css';
import logoFull from './Assets/logoFull.jpg';
import Body from './Components/Body';
import Form from './Components/Form';
import Last from './Components/Last';
import Lower from './Components/Lower';
import Navbar from './Components/Navbar';

function App() {
  return (
   <div className='w-169'>
      <Navbar/>
      
        <Body/>
        <Form/>
        <Lower/>
    
      <img src={logoFull} alt="" className='h-24 mx-auto -mt-14'/>
   
        <Last/>
      
    </div>
  );
}

export default App;

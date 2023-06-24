
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddReceipe from './Components/AddReceipe';
import Navbar from './Components/Navbar';
import ShowReceipes from './Components/ShowReceipes';

function App() {
  return (
    <>

      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path='addreceipe' element={<AddReceipe/>}/>
          <Route path='showreceipes' element={<ShowReceipes/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </>
  );
}

export default App;

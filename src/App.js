
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddReceipe from './Components/AddReceipe';
import Navbar from './Components/Navbar';
import ShowReceipes from './Components/ShowReceipes';
import ReceipeDetails from './Components/ReceipeDetails';

function App() {
  return (
    <>

      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path='addreceipe' element={<AddReceipe/>}/>
          <Route path='showreceipes' element={<ShowReceipes/>}/>
          <Route path='receipedetails'>
            <Route path=':id' element={<ReceipeDetails/>}/>
          </Route>
          <Route path='receipeupdate'>
            <Route path=':id' element={<AddReceipe/>}/>
          </Route>

        </Routes>
      
      </BrowserRouter>
      
    </>
  );
}

export default App;

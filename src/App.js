
import { Routes, Route } from "react-router-dom";
import './App.css';
import DEscriptionUser from "./Components/DEscriptionUser";
import HomePage from "./Components/HomePage";
import TestPage from "./Components/TestPage";
import USerList from "./Components/USerList";
import NavBar from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
  <NavBar/>
<Routes>
  <Route    path='/' element={<HomePage/>}    />
  <Route path='/test' element={<TestPage/>}/>
  <Route path='/users' element={<USerList/>} />
  <Route path='/user/:ID' element={<DEscriptionUser/>}/>
</Routes>

    </div>
  );
}

export default App;

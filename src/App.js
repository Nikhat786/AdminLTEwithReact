import './App.css';
import AppHeader from './_components/AppHeader/AppHeader';
import SideNav from './_components/SideNav/SideNav';
import Footer from './_components/Footer/Footer';
import Home from './_components/Home/Home';
import Register from './_components/_content/Register';
import Manage from './_components/_content/Employee/Mange'
import {Routes , Route } from "react-router-dom" 
import Details from './_components/_content/Employee/Details';

function App() {
  return (
    <div className="wrapper">
    <AppHeader/>
    <Routes> 
    <Route path="/" element={<Home/> } /> 
    <Route path="/Register" element={ <Register/> } /> 
    <Route path="/Manage" element={<Manage/> } ></Route>
    <Route path="/Details" element={<Details/> } ></Route>
    {/* <Route path="/Manage" component={<Manage/> } ></Route> */}
 
    </Routes>
    
   
    <SideNav/>
    <Footer/>
  </div>
  );
}

export default App;

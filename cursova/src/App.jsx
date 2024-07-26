import './styles/Page_1/index.css'
import Page1 from "./Components/Page_1/page1.jsx";
import Page_2 from './Components/page_2/page_2_teams.jsx';
import Playoffs from './Components/Page_3/Page_3_playoffs.jsx';
import Login from './Components/Page_4/Login.jsx'
import RegisterPage from './Components/Page_5/RegisterPage.jsx';
import Schedule from './Components/Page_6/Schedule.jsx';
import Teams from './Components/Page_7/Teams.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Page1/>}/>
      <Route path='/group' element={<Page_2/>}/>
      <Route path='/playoffs' element={<Playoffs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/schedule' element={<Schedule/>}/>
      <Route path='/teams' element={<Teams/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App

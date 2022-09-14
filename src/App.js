import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Initial from './pages/initial';
import Home from './pages/home';
import Events from "./pages/events";
import Projects from "./pages/projects";
import Team from "./pages/team";
import Contact from "./pages/contact";

const base = "gdsc-frontend";
export const endpoints = {
  initial:`${base}/`,
  home:`${base}/home/`,
  events:`${base}/events/`,
  projects:`${base}/projects/`,
  team:`${base}/team/`,
  contact:`${base}/contact/`,
}

function App() {
  return (
        <Routes>
                <Route exact path={endpoints.initial} element={<Initial/>}/>
           
                <Route path={endpoints.home} element={<Home/>}/>

                <Route path={endpoints.events} element={<Events/>}/>

                <Route path={endpoints.projects} element={<Projects/>}/>

                <Route path={endpoints.team} element={<Team/>}/>

                <Route path={endpoints.contact} element={<Contact/>}/>
                
        </Routes>
  );
}

export default App;
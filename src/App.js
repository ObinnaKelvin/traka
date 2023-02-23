//import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbox from "./View/pages/chatbox/Chatbox.jsx";
import Create from "./View/pages/create/Create.jsx";
import Home from "./View/pages/home/Home.jsx";
import Incidence from "./View/pages/incidence/Incidence.jsx";
import Login from "./View/pages/login/Login.jsx";
import Team from "./View/pages/team/Team.jsx";
import Update from "./View/pages/update/Update.jsx";
import {useSelector} from 'react-redux'
import IncidenceByFacility from "./View/pages/incidence/IncidenceByFacility.jsx";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Notifications from "./View/pages/notifications/Notifications.jsx";

function App() {
  const {auth} = useSelector(state => state)
  const createdStatus = ''
  const updatedStatus = ''

  const createdToast = () => {
    toast("Incidence created!")
  }

  const updatedToast = () => {
    toast("Incidence updated!")
  }

  if(createdStatus === true){
      createdToast();
  }
  if(updatedStatus === true){
      updatedToast();
  }

  console.log(createdStatus)
  // console.log(updatedStatus)

  return (
      <Router>
        <Routes>
          {/* <>
            {
              auth.loggedIn ? <Route path='/' element={<Login />}/>
            }
          </> */}
          <Route path='/' element={<Login />}/>
          <Route path='/dashboard' element={<Home />}/>
          <Route path='/incidence' element={<Incidence />}/>
          <Route path='/incidence/:incidenceId' element={<Update updatedStatus={updatedStatus}/>}/>
          <Route path='/incidenceByFacility/' element={<Incidence />}/>
          <Route path='/incidenceByFacility/:facilityName' element={<IncidenceByFacility />}/>
          <Route path='/team' element={<Team />}/>
          <Route path='/chatbox' element={<Chatbox />}/>
          <Route path='/create' element={<Create createdStatus={createdStatus}/>}/>
          <Route path='/notifications' element={<Notifications />}/>
        </Routes>
        <ToastContainer></ToastContainer>
      </Router>
  );
}

export default App;

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
import Administration from "./View/pages/administration/Administration.jsx";
import { LoadingScreen } from "./View/components/loading/Loading.jsx";
import { SkeletonTheme } from "react-loading-skeleton";
import Agent from "./View/pages/agent/Agent.jsx";
import TeamAdmin from "./View/pages/teamAdmin/TeamAdmin.jsx";
import Privilege from "./View/pages/privilege/Privilege.jsx";
import PasswordReset from "./View/pages/passwordReset/PasswordReset.jsx";
import Sla from "./View/pages/sla/SlaAdmin.jsx";
import FacilityAdmin from "./View/pages/facilityAdmin/FacilityAdmin.jsx";
import Department from "./View/pages/department/Department.jsx";
import Category from "./View/pages/category/Category.jsx";
import Priority from "./View/pages/priority/Priority.jsx";
import EmailTemplate from "./View/pages/emailTemplate/EmailTemplate.jsx";
import Article from "./View/pages/article/Article.jsx";


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
    <SkeletonTheme>
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
          <Route path='/administration' element={<Administration />}/>
          <Route path='/welcome' element={<LoadingScreen />}/>
          <Route path='/administration/agent' element={<Agent />}/>
          <Route path='/administration/team' element={<TeamAdmin />}/>
          <Route path='/administration/privilege' element={<Privilege />}/>
          <Route path='/administration/password-reset' element={<PasswordReset />}/>
          <Route path='/administration/sla' element={<Sla />}/>
          <Route path='/administration/facility' element={<FacilityAdmin />}/>
          <Route path='/administration/department' element={<Department />}/>
          <Route path='/administration/category' element={<Category />}/>
          <Route path='/administration/priority' element={<Priority />}/>
          <Route path='/administration/email-templates' element={<EmailTemplate />}/>
          <Route path='/administration/articles' element={<Article />}/>
        </Routes>
        <ToastContainer></ToastContainer>
      </Router>
    </SkeletonTheme>
  );
}

export default App;

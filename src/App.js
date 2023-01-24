import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbox from "./View/pages/chatbox/Chatbox.jsx";
import Create from "./View/pages/create/Create.jsx";
import Home from "./View/pages/home/Home.jsx";
import Incidence from "./View/pages/incidence/Incidence.jsx";
import Login from "./View/pages/login/Login.jsx";
import Team from "./View/pages/team/Team.jsx";
import Update from "./View/pages/update/Update.jsx";
import {useSelector} from 'react-redux'

function App() {
  const {auth} = useSelector(state => state)
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
          <Route path='/incidence/:id' element={<Update />}/>
          <Route path='/team' element={<Team />}/>
          <Route path='/chatbox' element={<Chatbox />}/>
          <Route path='/create' element={<Create />}/>
        </Routes>
      </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbox from "./View/pages/chatbox/Chatbox.jsx";
import Create from "./View/pages/create/Create.jsx";
import Home from "./View/pages/home/Home.jsx";
import Incidence from "./View/pages/incidence/Incidence.jsx";
import Team from "./View/pages/team/Team.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<Home />}/>
          <Route path='/incidence' element={<Incidence />}/>
          <Route path='/team' element={<Team />}/>
          <Route path='/chatbox' element={<Chatbox />}/>
          <Route path='/create' element={<Create />}/>
        </Routes>
      </Router>
  );
}

export default App;

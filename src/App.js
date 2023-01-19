import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./View/pages/home/Home.jsx";
import Incidence from "./View/pages/incidence/Incidence.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<Home />}/>
          <Route path='/incidence' element={<Incidence />}/>
        </Routes>
      </Router>
  );
}

export default App;

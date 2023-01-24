import Dashboard from "../dashboard/Dashboard";
import './home.css';
// import { useSelector } from "react-redux";
// import Login from "../login/Login";
const Home = () => {
  // const {auth} = useSelector(state => state)
  return (
    <> 
    {/* {
      !auth.loggedIn ? <Login /> : */}

      <div className="container">
        <Dashboard />
      </div>    
    
        {/* } */}

    </>
  )
}

export default Home
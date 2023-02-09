import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import './home.css';
// import { useSelector } from "react-redux";
// import Login from "../login/Login";
const Home = () => {
  // const {auth} = useSelector(state => state)
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState([]);
  const [countStatus, setCountStatus] = useState([]);

  useEffect(() => {
    loadCountByFacility();
    loadCountByFacilityStatus();
  }, [])

  const loadCountByFacility = async() => {
      setLoading(true)
      try {
          await axios.get("http://localhost:3005/api/incidences/countByFacility")
          .then(response => setCount(response.data))
      } catch (error) {
          
      }
      setLoading(false)
  }

  const loadCountByFacilityStatus = async() => {
      setLoading(true)
      try {
          await axios.get("http://localhost:3005/api/incidences/countByFacilityStatus")
          .then(response => setCountStatus(response.data))
          
      } catch (error) {
          
      }
      setLoading(false)
  }
  return (
    <> 
    {/* {
      !auth.loggedIn ? <Login /> : */}

      <div className="container">
        <Dashboard loading={loading} count={count} countStatus={countStatus}/>
      </div>    
    
        {/* } */}

    </>
  )
}

export default Home
import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import './home.css';
// import { useSelector } from "react-redux";
// import Login from "../login/Login";
const Home = () => {
  // const {auth} = useSelector(state => state)
  
  const PUBLIC_URL = 'https://traka.onrender.com/' // production
  const [loading, setLoading] = useState(true);
  const [countTotal, setCountTotal] = useState([]);
  const [countStatus, setCountStatus] = useState([]);

  useEffect(() => {
    loadCountByFacility();
    // loadCountByFacilityStatus();
  }, [])

  const loadCountByFacility = async() => {
      // setLoading(true)
      try {
          await axios.get(`${PUBLIC_URL}api/incidences/countByFacility`)
          .then(response => setCountTotal(response.data))

          await axios.get(`${PUBLIC_URL}api/incidences/countByFacilityStatus`)
          .then(response => setCountStatus(response.data))
          setLoading(false)
      } catch (error) {
          console.log(error)
      }
  }

  // const loadCountByFacilityStatus = async() => {
  //     setLoading(true)
  //     try {
  //         await axios.get(`${PUBLIC_URL}api/incidences/countByFacilityStatus`)
  //         .then(response => setCountStatus(response.data))
  //         setLoading(false)
          
  //     } catch (error) {
          
  //     }
  //     // setLoading(false)
  // }
  return (
    <> 
    {/* {
      !auth.loggedIn ? <Login /> : */}

      <div className="container">
        { loading ? <h2>Loading Home page...</h2> :
          <div>
            Testing
            {countTotal[0].count}
          </div>
        }
        {/* <Dashboard loading={loading} countTotal={countTotal} countStatus={countStatus}/> */}
      </div>    
    
        {/* } */}

    </>
  )
}

export default Home
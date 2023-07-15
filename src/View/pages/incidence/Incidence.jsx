import { faCircleCheck, faFilter, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react';
import { AddButton } from '../../components/addButton/AddButton'
import NavBar from '../../components/navigation/NavBar'
import './incidence.css';
import axios from 'axios';
import { format } from 'date-fns'//transform the dates to readable formats
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { IncidenceSkeletonLoading } from '../../components/loading/Loading';

// import { useDispatch, useSelector } from 'react-redux';
// import { getIncidences } from '../../../Controller/Redux/incidenceSlice'

const Incidence = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { incidence } = useSelector(state => state);
  //const {id, facilities} = useParams();
  const [facility, setFacility] = useState('');
  const [facilityData, setFacilityData] = useState([]);
  const [facilityIncidenceData, setFacilityIncidenceData] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const PUBLIC_URL = 'https://traka.onrender.com/' // production
  //const [loading, setLoading] = useState(false);
  // const [count, setCount] = useState([
  //     {
  //         "facility": "Ikeja",
  //         "open": 2,
  //         "closed": 0
  //     },
  //     {
  //         "facility": "Ikeja Clinic",
  //         "open": 1,
  //         "closed": 0
  //     },
  //     {
  //         "facility": "Ikoyi",
  //         "open": 0,
  //         "closed": 1
  //     },
  //     {
  //         "facility": "Idejo",
  //         "open": 2,
  //         "closed": 0
  //     },
  //     {
  //         "facility": "LSS",
  //         "open": 0,
  //         "closed": 1
  //     },
  //     {
  //         "facility": "FABAC",
  //         "open": 0,
  //         "closed": 0
  //     }
  // ])

  const toggleTab = (index) => {
    setToggleState(index);
  }

  const getOpenCases = (data) => {
    if(data.status === "Open")
    return (
      <div className="incidence-cases" onClick={() => navigate(`/incidence/${data._id}`)}>
              <div className="incidence-category">{data.incidence}</div> <FontAwesomeIcon icon={faCircleCheck} className={`${data.status==="Open"? "done": "done active"}`}/> {/* Logic-If closed is true then display the done icon */}
              <div className="incidence-detail">{data.description}</div>
              <div className="incidence-reporter">
                <div className={`${data}? incidence-priority ${data.priority}`}>{data.priority}</div>•
                <div className='incidence-user'>By {data.reportedBy}</div>•
                <div className='incidence-date'>{`${format(new Date (data.dateOpened), "dd/MM/yyyy hh:mm aaa")}`}</div>
              </div>
      </div> 
    )
  }

  const getClosedCases = (data) => {
    if(data.status === "Closed")
    return (
      <div className="incidence-cases" onClick={() => navigate(`/incidence/${data._id}`)}>
              <div className="incidence-category">{data.incidence}</div> <FontAwesomeIcon icon={faCircleCheck} className={`${data.status==="Open"? "done": "done active"}`}/> {/* Logic-If closed is true then display the done icon */}
              <div className="incidence-detail">{data.description}</div>
              <div className="incidence-reporter">
                <div className={`${data}? incidence-priority ${data.priority}`}>{data.priority}</div>•
                <div className='incidence-user'>By {data.reportedBy}</div>•
                <div className='incidence-date'>{`${format(new Date (data.dateOpened), "dd/MM/yyyy hh:mm aaa")}`}</div>
              </div>
      </div> 
    )
  }



  useEffect(() => {
    loadFacilityData();
    loadFacilityIncidenceData();
    onChangeFacility();
    //loadCountByFacility();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    loadFacilityIncidenceData() //This runs again to update the update state
  }, [])

  const loadFacilityData = async() => {
    //await axios.get('http://localhost:3005/api/facility/') //local
    await axios.get(`${PUBLIC_URL}api/facility/`) //production
    .then(response => setFacilityData(response.data))
    .then(console.log("Facility Data >>>>",facilityData))
  }

  const loadFacilityIncidenceData = async() => {
    //await axios.get(`http://localhost:3005/api/incidenceByFacility/`) //local
    await axios.get(`${PUBLIC_URL}api/incidenceByFacility/`) //production
    .then(response => {setFacilityIncidenceData(response.data); setIsLoading(false)})
    .then( console.log("Facility Incidence Data >>>>",facilityIncidenceData))
  }


  const onChangeFacility = async(event) => {
    setFacility(event.target.value); //Fix 1: Delayed State
    console.log(event.target.value); //Fix 2: Delayed State
    //const url = event.target.value === "All Facilities" ? "http://localhost:3005/api/incidenceByFacility/" //local
    const url = event.target.value === "All Facilities" ? `${PUBLIC_URL}api/incidenceByFacility/` //production
    //: `http://localhost:3005/api/incidenceByFacility/${event.target.value}` //Fix 3: Delayed State //local
    : `${PUBLIC_URL}api/incidenceByFacility/${event.target.value}` //Fix 3: Delayed State //production
    await axios.get(url) 
    .then(response => {setFacilityIncidenceData(response.data); console.log("Facility Incidence Data >>>>",response.data)}) //Fix 4: Delayed State
    //.then(console.log("Facility Dummy Data >>>>",facilityIncidenceData))
  }

  // const loadCountByFacility = async() => {
  //   await axios.get("http://localhost:3005/api/incidences/countByFacilityStatus")
  //   .then(response => console.log(response.data))
  // }

  return (
    <div className='incidence-container'>
      <AddButton />
      <NavBar />
      <div className='incidence-header'>
        Incidences

        <div className="incidence-location">
          <span><FontAwesomeIcon icon={faLocationDot}/></span>
          <span>
            <select className='incidence-select' onChange={onChangeFacility} value={facility}>
              <option value="All Facilities">All Facilities</option>
                  {
                    facilityData.map((data)=> (
                      <option value={data.name.split(' ').join('')} key={data._id}>{data.name}</option>
                    ))
                  }
            </select>
          </span>
        </div>

        <div className='incidence-filter'>
                  <span><FontAwesomeIcon icon={faFilter}/></span>
                  <span>Filter</span>
        </div>
      </div>
      
      <div className="incidence-tabs-wrapper">
        <div className={toggleState === 1 ? "incidence-tab active-tab": "incidence-tab"} onClick={()=>toggleTab(1)}>All ({facilityIncidenceData.length})</div>
        <div className={toggleState === 2 ? "incidence-tab active-tab": "incidence-tab"}  onClick={()=>toggleTab(2)}>Open</div>
        <div className={toggleState === 3 ? "incidence-tab active-tab": "incidence-tab"}  onClick={()=>toggleTab(3)}>Closed</div>
      </div>

      {isLoading &&<IncidenceSkeletonLoading cards={12}/>}

      <div className={toggleState === 1 ? "incidence-wrapper active-content": "incidence-wrapper"}>


        {
          facilityIncidenceData.map((data) => (
            <div className="incidence-cases" onClick={() => navigate(`/incidence/${data._id}`)}>
              <div className="incidence-category">{data.incidence}</div> <FontAwesomeIcon icon={faCircleCheck} className={`${data.status==="Open"? "done": "done active"}`}/> {/* Logic-If closed is true then display the done icon */}
              <div className="incidence-detail">{data.description}</div>
              <div className="incidence-reporter">
                <div className={`${data}? incidence-priority ${data.priority}`}>{data.priority}</div>•
                <div className='incidence-user'>By {data.reportedBy}</div>•
                <div className='incidence-date'>{`${format(new Date (data.dateOpened), "dd/MM/yyyy hh:mm aaa")}`}</div>
                {/* <div className='incidence-date'>27 January 02:31pm</div> */}
                {/* <div className='incidence-date'>{data.dateOpened}</div> */}
              </div>
            </div>            
          ))
        }

      </div>

      <div className={toggleState === 2 ? "incidence-wrapper active-content": "incidence-wrapper"}>

        {
          facilityIncidenceData.map(getOpenCases)
        }

      </div>

      <div className={toggleState === 3 ? "incidence-wrapper active-content": "incidence-wrapper"}>

        {
          facilityIncidenceData.map(getClosedCases)
        }
        
      </div>
    </div>
  )
}

export default Incidence
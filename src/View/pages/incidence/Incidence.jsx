import { faCircleCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react';
import AddButton from '../../components/addButton/AddButton'
import NavBar from '../../components/navigation/NavBar'
import './incidence.css';
import axios from 'axios';
import { format } from 'date-fns'//transform the dates to readable formats

// import { useDispatch, useSelector } from 'react-redux';
// import { getIncidences } from '../../../Controller/Redux/incidenceSlice'

const Incidence = () => {
  // const dispatch = useDispatch();
  // const { incidence } = useSelector(state => state);
  //const {id, facilities} = useParams();
  const [facility, setFacility] = useState('');
  const [facilityData, setFacilityData] = useState([]);
  const [facilityIncidenceData, setFacilityIncidenceData] = useState([]);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  const getOpenCases = (data) => {
    if(data.status === "Open")
    return (
      <div className="incidence-cases">
              <div className="incidence-category">{data.incidence}</div> <FontAwesomeIcon icon={faCircleCheck} className={`${data.status==="Open"? "done": "done active"}`}/> {/* Logic-If closed is true then display the done icon */}
              <div className="incidence-detail">{data.description}</div>
              <div className="incidence-reporter">
                <div className={`${data}? incidence-priority ${data.priority}`}>{data.priority}</div>•
                <div className='incidence-user'>By {data.reportedBy}</div>•
                <div className='incidence-date'>27 January 02:31pm</div>
              </div>
      </div> 
    )
  }

  const getClosedCases = (data) => {
    if(data.status === "Closed")
    return (
      <div className="incidence-cases">
              <div className="incidence-category">{data.incidence}</div> <FontAwesomeIcon icon={faCircleCheck} className={`${data.status==="Open"? "done": "done active"}`}/> {/* Logic-If closed is true then display the done icon */}
              <div className="incidence-detail">{data.description}</div>
              <div className="incidence-reporter">
                <div className={`${data}? incidence-priority ${data.priority}`}>{data.priority}</div>•
                <div className='incidence-user'>By {data.reportedBy}</div>•
                <div className='incidence-date'>27 January 02:31pm</div>
              </div>
      </div> 
    )
  }



  useEffect(() => {
    loadFacilityData();
    loadFacilityIncidenceData();
    onChangeFacility();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadFacilityData = async() => {
    await axios.get('http://localhost:3005/api/facility/')
    .then(response => setFacilityData(response.data))
    .then(console.log("Facility Data >>>>",facilityData))
  }

  const loadFacilityIncidenceData = async() => {
    await axios.get(`http://localhost:3005/api/incidenceByFacility/`)
    .then(response => setFacilityIncidenceData(response.data))
    .then(console.log("Facility Incidence Data >>>>",facilityIncidenceData))
  }


  const onChangeFacility = async(event) => {
    setFacility(event.target.value); //Fix 1: Delayed State
    console.log(event.target.value); //Fix 2: Delayed State
    const url = event.target.value === "All Facilities" ? "http://localhost:3005/api/incidenceByFacility/"
    : `http://localhost:3005/api/incidenceByFacility/${event.target.value}` //Fix 3: Delayed State
    await axios.get(url) 
    .then(response => {setFacilityIncidenceData(response.data); console.log("Facility Incidence Data >>>>",response.data)}) //Fix 4: Delayed State
    //.then(console.log("Facility Dummy Data >>>>",facilityIncidenceData))
  }

  // const data = [
  //   {
  //     incidence: "Patient needs to be admitted.",
  //     description: "Patient needs to be admitted for an emergency surgery.",
  //     category: "Bed Occupancy",
  //     facility: "Ikeja",
  //     department: "Nursing",
  //     priority: "High",
  //     reportedBy: "Damilola",
  //     status: "Open",
  //     dateOpened: "2023-01-25T08:00:20.000+00:00",
  //     dateClosed: null,
  //     active: true,
  //     lastUpdatedBy: "",
  //     lastUpdatedDate: "2023-01-23T08:00:20.000+00:00",
  //   },
  //   {
  //     incidence: "Service needs to be updated for tomorrows clinic.",
  //     description: "Service needs to be updated for tomorrows clinic.",
  //     category: "Service price update",
  //     facility: "Ikeja Clinic",
  //     department: "Billing",
  //     priority: "Medium",
  //     reportedBy: "Mary",
  //     status: "Open",
  //     dateOpened: "2023-01-25T08:00:20.000+00:00",
  //     dateClosed: null,
  //     active: true,
  //     lastUpdatedBy: "",
  //     lastUpdatedDate: "2023-01-25T08:00:20.000+00:00",
  //   },
  //   {
  //     incidence: "Zero balance",
  //     description: "Patient account balance displays zero balance",
  //     category: "EMR Bug",
  //     facility: "LSS",
  //     department: "Billing",
  //     priority: "Immediate",
  //     reportedBy: "Susan",
  //     status: "Closed",
  //     dateOpened: "2023-01-25T08:00:20.000+00:00",
  //     dateClosed: null,
  //     active: true,
  //     lastUpdatedBy: "",
  //     lastUpdatedDate: "2023-01-25T08:00:20.000+00:00",
  //   },
  //   {
  //     incidence: "Conceirge user's password expired.",
  //     description: "Conceirge user's password expired.",
  //     category: "Password Reset",
  //     facility: "Idejo",
  //     department: "Nursing",
  //     priority: "Low",
  //     reportedBy: "Abiola",
  //     status: "Open",
  //     dateOpened: "2023-01-25T08:00:20.000+00:00",
  //     dateClosed: null,
  //     active: true,
  //     lastUpdatedBy: "",
  //     lastUpdatedDate: "2023-01-25T08:00:20.000+00:00",   
  //   },
  //   {
  //     incidence: "New HMO staffs account",
  //     description: "New HMO staffs needs to be created.",
  //     category: "User creation",
  //     facility: "Ikoyi",
  //     department: "Inventory",
  //     priority: "Medium",
  //     reportedBy: "Deborah",
  //     status: "Closed",
  //     dateOpened: "2023-01-27T08:00:20.000+00:00",
  //     dateClosed: null,
  //     active: true,
  //     lastUpdatedBy: "",
  //     lastUpdatedDate: "2023-01-25T08:00:20.000+00:00",  
  //   }
  // ]

  return (
    <div className='incidence-container'>
      <AddButton />
      <NavBar />
      <p className='incidence-header'>Incidences</p>
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

            {/* <option value="Ikeja - Awolowo">Ikeja - Awolowo</option>
            <option value="Ikeja - Adeniyi Jones">Ikeja - Adeniyi Jones</option>
            <option value="Victoria Island">Victoria Island</option>
            <option value="FABAC">FABAC</option>
            <option value="Ikoyi">Ikoyi</option> */}
          </select>
        </span>
      </div>
      <div className="incidence-tabs-wrapper">
        <div className={toggleState === 1 ? "incidence-tab active-tab": "incidence-tab"} onClick={()=>toggleTab(1)}>All ({facilityIncidenceData.length})</div>
        <div className={toggleState === 2 ? "incidence-tab active-tab": "incidence-tab"}  onClick={()=>toggleTab(2)}>Open</div>
        <div className={toggleState === 3 ? "incidence-tab active-tab": "incidence-tab"}  onClick={()=>toggleTab(3)}>Closed</div>
      </div>
      <div className={toggleState === 1 ? "incidence-wrapper active-content": "incidence-wrapper"}>
        {
          facilityIncidenceData.map((data) => (
            <div className="incidence-cases">
              <div className="incidence-category">{data.incidence}</div> <FontAwesomeIcon icon={faCircleCheck} className={`${data.status==="Open"? "done": "done active"}`}/> {/* Logic-If closed is true then display the done icon */}
              <div className="incidence-detail">{data.description}</div>
              <div className="incidence-reporter">
                <div className={`${data}? incidence-priority ${data.priority}`}>{data.priority}</div>•
                <div className='incidence-user'>By {data.reportedBy}</div>•
                {/* <div className='incidence-date'>{`${format(data.dateOpened, "dd/MM/yyyy HH:mm:ss")}`}</div> */}
                <div className='incidence-date'>27 January 02:31pm</div>
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
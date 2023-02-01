import { faCircleCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react';
import AddButton from '../../components/addButton/AddButton'
import NavBar from '../../components/navigation/NavBar'
import './incidence.css';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { getIncidences } from '../../../Controller/Redux/incidenceSlice'

const Incidence = () => {
  // const dispatch = useDispatch();
  // const { incidence } = useSelector(state => state);
  const [facility, setFacility] = useState('');
  const [facilityData, setFacilityData] = useState([])

  useEffect(() => {
    loadFacilityData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadFacilityData = async() => {
    await axios.get('http://localhost:3005/api/facility/')
    .then(response => setFacilityData(response.data))
    .then(console.log("Facility Data >>>>",facilityData))
  }

  const data = [
    {
      incidence: "Patient needs to be admitted.",
      description: "Patient needs to be admitted for an emergency surgery.",
      category: "Bed Occupancy",
      facility: "Ikeja",
      department: "Nursing",
      priority: "High",
      reportedBy: "Damilola",
      status: "Open",
      dateOpened: "2023-01-25T08:00:20.000+00:00",
      dateClosed: null,
      active: true,
      lastUpdatedBy: "",
      lastUpdatedDate: "2023-01-23T08:00:20.000+00:00",
    },
    {
      incidence: "Service needs to be updated for tomorrows clinic.",
      description: "Service needs to be updated for tomorrows clinic.",
      category: "Service price update",
      facility: "Ikeja Clinic",
      department: "Billing",
      priority: "Medium",
      reportedBy: "Mary",
      status: "Open",
      dateOpened: "2023-01-25T08:00:20.000+00:00",
      dateClosed: null,
      active: true,
      lastUpdatedBy: "",
      lastUpdatedDate: "2023-01-25T08:00:20.000+00:00",
    },
    {
      incidence: "Zero balance",
      description: "Patient account balance displays zero balance",
      category: "EMR Bug",
      facility: "LSS",
      department: "Billing",
      priority: "Immediate",
      reportedBy: "Susan",
      status: "Closed",
      dateOpened: "2023-01-25T08:00:20.000+00:00",
      dateClosed: null,
      active: true,
      lastUpdatedBy: "",
      lastUpdatedDate: "2023-01-25T08:00:20.000+00:00",
    },
    {
      incidence: "Conceirge user's password expired.",
      description: "Conceirge user's password expired.",
      category: "Password Reset",
      facility: "Idejo",
      department: "Nursing",
      priority: "Low",
      reportedBy: "Abiola",
      status: "Open",
      dateOpened: "2023-01-25T08:00:20.000+00:00",
      dateClosed: null,
      active: true,
      lastUpdatedBy: "",
      lastUpdatedDate: "2023-01-25T08:00:20.000+00:00",   
    },
    {
      incidence: "New HMO staffs account",
      description: "New HMO staffs needs to be created.",
      category: "User creation",
      facility: "Ikoyi",
      department: "Inventory",
      priority: "Medium",
      reportedBy: "Deborah",
      status: "Closed",
      dateOpened: "2023-01-27T08:00:20.000+00:00",
      dateClosed: null,
      active: true,
      lastUpdatedBy: "",
      lastUpdatedDate: "2023-01-25T08:00:20.000+00:00",  
    }
  ]

  return (
    <div className='incidence-container'>
      <AddButton />
      <NavBar />
      <p className='incidence-header'>Incidences</p>
      <div className="incidence-location">
        <span><FontAwesomeIcon icon={faLocationDot}/></span>
        <span>
          <select className='incidence-select' onChange={(e)=>setFacility(e.target.value)} value={facility}>
            <option value="All Facilities">All Facilities</option>
                {
                  facilityData.map((data)=> (
                    <option value={data.name} key={data._id}>{data.name}</option>
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
        <div className="incidence-tab active">All (7)</div>
        <div className="incidence-tab">Open(6)</div>
        <div className="incidence-tab">Closed(1)</div>
      </div>
      <div className="incidence-wrapper">
        <div className="incidence-cases">
          <div className="incidence-category">Bed Occupancy</div>
          <div className="incidence-detail">Patient needs to be admitted for an emergency surgery.</div>
          <div className="incidence-reporter">
            <div className='incidence-priority High'>High</div>•
            <div className='incidence-user'>By Damilola</div>•
            <div className='incidence-date'>23 January 09:53am</div>
          </div>
        </div>
        <div className="incidence-cases">
          <div className="incidence-category">Service price update</div>
          <div className="incidence-detail">Service needs to be updated for tomorrows clinic.</div>
          <div className="incidence-reporter">
            <div className='incidence-priority Medium'>Medium</div>•
            <div className='incidence-user'>By Mary</div>•
            <div className='incidence-date'>25 January 10:28am</div>
          </div>
        </div>
        <div className="incidence-cases">
          <div className="incidence-category">EMR Bug</div>
          <div className="incidence-detail">Patient account balance displays zero balance</div>
          <div className="incidence-reporter">
            <div className='incidence-priority Immediate'>Immediate</div>•
            <div className='incidence-user'>By Susan</div>•
            <div className='incidence-date'>25 January 10:28am</div>
          </div>
        </div>
        <div className="incidence-cases">
          <div className="incidence-category">Password Reset</div>
          <div className="incidence-detail">Conceirge user's password expired.</div>
          <div className="incidence-reporter">
            <div className='incidence-priority Low'>Low</div>•
            <div className='incidence-user'>By Abiola</div>•
            <div className='incidence-date'>25 January 10:28am</div>
          </div>
        </div>
        <div className="incidence-cases">
          <div className="incidence-category">User creation</div> <FontAwesomeIcon icon={faCircleCheck} className="done active" /> {/* Logic-If closed is true then display the done icon */}
          <div className="incidence-detail">New HMO staffs needs to be created.</div>
          <div className="incidence-reporter">
            <div className='incidence-priority Medium'>Medium</div>•
            <div className='incidence-user'>By Deborah</div>•
            <div className='incidence-date'>27 January 02:31pm</div>
          </div>
        </div>
        {
          data.map((data) => (
            <div className="incidence-cases">
              <div className="incidence-category">{data.incidence}</div> <FontAwesomeIcon icon={faCircleCheck} className={`${data.status==="Open"? "done": "done active"}`}/> {/* Logic-If closed is true then display the done icon */}
              <div className="incidence-detail">{data.description}</div>
              <div className="incidence-reporter">
                <div className={`${data}? incidence-priority ${data.priority}`}>{data.priority}</div>•
                <div className='incidence-user'>By {data.reportedBy}</div>•
                <div className='incidence-date'>27 January 02:31pm</div>
              </div>
            </div>            
          ))
        }
      </div>
    </div>
  )
}

export default Incidence
import { useState, useEffect } from 'react'
import NavBar from '../../components/navigation/NavBar'
import { format, parseISO } from 'date-fns'//transform the dates to readable formats
import './update.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Moment from 'react-moment';
import 'moment-timezone';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Update = () => {
    const { incidenceId } = useParams();
    const [incidence, setIncidence] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('Open');
    const [facility, setFacility] = useState('');
    const [department, setDepartment] = useState('');
    const [priority, setPriority] = useState('');
    const [openDate, setOpenDate] = useState('');
    const [reportedBy, setReportedBy] = useState('');
    const [closedDate, setClosedDate] = useState('');
    const [active, setActive] = useState('active');
    // const [updatedIncidence, setUpdatedIncidence] = useState({
    //   incidence: incidence,
    //   description: description,
    //   category: category,
    //   facility: facility,
    //   department: department,
    //   priority: priority,
    //   reportedBy: 'Update User',
    //   status: status,
    //   dateOpened: openDate,
    //   dateClosed: closedDate,
    //   active: active,
    //   lastUpdatedBy: '',
    //   lastUpdatedDate: '',
    // })
    const [updatedIncidence, setUpdatedIncidence] = useState([])

    const handleUpdate = (e) => {
      e.preventDefault();
      axios.put(`http://localhost:3005/api/incidences/${incidenceId}`, {
        incidence: incidence,
        description: description,
        category: category,
        facility: facility,
        department: department,
        priority: priority,
        status: status,
        active: active  
      })
      .then(response => console.log(response))
    }

    useEffect(()=> {
      loadIncidence()
    }, [])
    // console.log(incidenceId)
    const loadIncidence = async() => {
      try {
        await axios.get(`http://localhost:3005/api/incidences/find/${incidenceId}`)
        // .then( response => {setUpdatedIncidence({
        //   incidence: response.data.incidence,
        //   description: response.data.description,
        //   category: response.data.category,
        //   facility: response.data.facility,
        //   department: response.data.department,
        //   priority: response.data.priority,
        //   reportedBy: response.data.reportedBy,
        //   status: response.data.status,
        //   dateOpened: response.data.dateOpened,
        //   dateClosed: response.data.closedDate,
        //   active: response.data.active,
        //   lastUpdatedBy: response.data.reportedBy,
        //   lastUpdatedDate: response.data.lastUpdatedDate,
        // }); 
        .then(response => {setUpdatedIncidence(response.data)
          setIncidence(response.data.incidence)
          setDescription(response.data.description)
          setCategory(response.data.category)
          setFacility(response.data.facility)
          setDepartment(response.data.department)
          setPriority(response.data.priority)
          setReportedBy(response.data.reportedBy)
          setStatus(response.data.status)
          setClosedDate(response.data.closedDate)
          setActive(response.data.active)
          setCategory(response.data.category)
          console.log("Update Incidence >>>>",response.data)})
          // console.log("Single Incidence >>>>",response.data)})
      } catch (error) {
        console.log(error)
      }
    }
    console.log (updatedIncidence)
  return (
    <div className='update-container'>
    <NavBar />
      <Link  className='update-goBack-link' to="/incidence"><div className='update-goBack'> <FontAwesomeIcon icon={faArrowLeft}/> Back</div></Link>
      <div className='update-form'>
          <p className='update-form-header'>Update an incidence</p>
          <form onSubmit={handleUpdate}>
            <p>
              <label>Incidence</label>
              <input className = 'formInput' type="text" name='Incidence' value={incidence} onChange={(e) => setIncidence(e.target.value)} placeholder="What's the incidence?"></input>
            </p>
            <p>
              <label>Description</label>
              <textarea className = 'formTextArea' type="text" name='Description' value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Can you describe as detailed as possible?"/>
            </p>
            <p>
              <label>Category</label>
              <select className = 'formSelect' onChange={(e)=>setCategory(e.target.value)} value={category}>
                <option>--Select One--</option>
                <option value="User creation">User creation</option>
                <option value="User priviledges">User priviledges</option>
                <option value="Password reset">Password reset</option>
                <option value="Service price update">Service price update</option>
                <option value="Item price update">Item price update</option>
                <option value="Service price configuration update">Service price configuration update</option>
                <option value="EMR user enquiry">EMR user enquiry</option>
                <option value="Service creation">Service creation</option>
                <option value="Company creation">Company creation</option>
                <option value="Tariff upload/Tariff update">Tariff upload/Tariff update</option>
                <option value="Payor Configuration Update (Approvals/Exclusions)">Payor Configuration Update (Approvals/Exclusions)</option>
                <option value="Bill resolutions">Bill resolutions</option>
                <option value="Bed Occupancy">Bed Occupancy</option>
                <option value="Report requests">Report requests</option>
                <option value="EMR Bug">EMR Bug</option>
                <option value="CRM incidences">CRM incidences</option>
                <option value="Sage incidences">Sage incidences</option>
              </select>
              {/* <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input> */}
            </p>
            <p>
              <label>Facility</label>
              <select className = 'formSelect' onChange={(e) => setFacility(e.target.value)} value={facility}>
                <option>--Select One--</option>
                <option value="Ikeja">Ikeja - Awolowo</option>
                <option value="Ikeja Clinic">Ikeja Clinic</option>
                <option value="Idejo">Idejo</option>
                <option value="LSS">LSS</option>
                <option value="FABAC">FABAC</option>
                <option value="Ikoyi">Ikoyi</option>
              </select>
              {/* <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input> */}
            </p>
            <p>
              <label>Department</label>
                <select className = 'formSelect' onChange={(e)=>setDepartment(e.target.value)} value={department}>
                  <option>--Select One--</option>
                  <option value="PCS">PCS</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Billing">Billing</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Laboratory">Laboratory</option>
                  <option value="Radiology">Radiology</option>
                  <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
                  <option value="Inventory">Inventory</option>
                </select>
            </p>
            <p>
              <label>Priority</label>
                <select className = 'formSelect' onChange={(e)=>setPriority(e.target.value)} value={priority}>
                  <option>--Select One--</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Immediate">Immediate</option>
                  <option value="Low">Low</option>
                </select>
            </p>
            <p>
              <label>Reported by</label>
              <input className = 'formInput' type="text" name='' value={reportedBy} disabled></input>
            </p>
            {/* <p>
              <label>Responsibility</label>
              <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input>
            </p> */}
            <p>
              <label>Status</label>
                <select className = 'formSelect' onChange={(e)=>setStatus(e.target.value)} value={status}>
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                  <option value="Delayed">Delayed</option>
                </select>
            </p>
            <p>
              <label>Date Opened</label>
              {/* <input className = 'formInput' type="text" name='' value={`${format( new Date (), "dd/MM/yyyy hh:mm aaa")}`} onChange={(e)=> setOpenDate(e.target.value)}  disabled> */}
              <div className = 'formInput'><Moment format='D MMM YYYY h:mm a'>{updatedIncidence.dateOpened}</Moment></div>
              {/* <input className = 'formInput' type="text" name='' value={new Date().substring()} onChange={(e)=> setOpenDate(e.target.value)}  disabled> */}
              {/* </input> */}
            </p>
            <p>
              {
                updatedIncidence.status === 'Closed' &&
                <>
                  <label>Date Closed</label>
                  <div className = 'formInput'><Moment format='D MMM YYYY h:mm a'>{updatedIncidence.lastUpdatedDate}</Moment></div>
                  {/* <input className = 'formInput' type="text" name='' value={`${format(new Date (singleIncidence.lastUpdatedDate), "dd/MM/yyyy hh:mm aaa")}` }  onChange={(e)=> setClosedDate(e.target.value)} disabled> */}
                  {/* <input className = 'formInput' type="text" name='' value={new Date()}  onChange={(e)=> setClosedDate(e.target.value)} disabled> */}
                  {/* <input className = 'formInput' type="text" name='' value={`${format(new Date (), "dd/MM/yyyy hh:mm aaa")}` }  onChange={(e)=> setClosedDate(e.target.value)} disabled> */}
                  {/* </input> */}
                </>
              }
            </p>
            <p className='update-activeStatus'>
                <>
                    <input type="radio" value={active} checked={active === 'active'} name="activeLife" onChange={(e)=>setActive(e.target.value) }/>Active 
                </>
                <>
                    <input type="radio" value={active} checked={active === 'inactive'} name="activeLife" onChange={(e)=>setActive(e.target.value)}/>Inactive 
                </>
            </p>

            <button>Update</button>
          </form>
      </div>
    </div>
  )
}

export default Update
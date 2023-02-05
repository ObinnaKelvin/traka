import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../../components/navigation/NavBar'
import { format } from 'date-fns'//transform the dates to readable formats
import './create.css';
import axios from 'axios';

const Create = () => {

  const [incidence, setIncidence] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [categoryData, setCategoryData] = useState([]);
  const [status, setStatus] = useState('Open');
  const [statusData, setStatusData] = useState([]);
  const [facility, setFacility] = useState('');
  const [facilityData, setFacilityData] = useState([]);
  const [department, setDepartment] = useState('');
  const [departmentData, setDepartmentData] = useState([]);
  const [priority, setPriority] = useState('');
  const [priorityData, setPriorityData] = useState([]);
  const [openDate, setOpenDate] = useState(new Date());
  const [closedDate, setClosedDate] = useState(null);
  // const [date, setDate] = useState([
  //   {
  //     openDate: new Date(),
  //     closedDate: null
  //   }
  // ])

//   const date = [{
//       openDate: new Date(),
//       closedDate: null
// }]

  useEffect(()=> {
    loadCategoryData();
    loadStatusData();
    loadFacilityData();
    loadDepartmentData()
    loadPriorityData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadCategoryData = async() => {
    await axios.get('http://localhost:3005/api/category/')
    .then(response => setCategoryData(response.data))
    .then(console.log("Category Data >>>>",categoryData))
  }

  const loadStatusData = async() => {
    await axios.get('http://localhost:3005/api/status/')
    .then(response => setStatusData(response.data))
    .then(console.log("Status Data >>>>",statusData))
  }

  const loadFacilityData = async() => {
    await axios.get('http://localhost:3005/api/facility/')
    .then(response => setFacilityData(response.data))
    .then(console.log("Facility Data >>>>",facilityData))
  }

  const loadDepartmentData = async() => {
    await axios.get('http://localhost:3005/api/department/')
    .then(response => setDepartmentData(response.data))
    .then(console.log("Department Data >>>>",departmentData))
  }

  const loadPriorityData = async() => {
    await axios.get('http://localhost:3005/api/priority/')
    .then(response => setPriorityData(response.data))
    .then(console.log("Priority Data >>>>",priorityData))
  }
  

  return (
    <div className='create-container'>
    <NavBar />
    
      <div className='create-form'>
          <p className='create-form-header'>Create an incidence</p>
          <form>
            <p>
              <label>Incidence</label>
              <input className = 'formInput' type="text" name='' value={incidence} onChange={(e)=> setIncidence(e.target.value)} placeholder="What's the incidence?"></input>
            </p>
            <p>
              <label>Description</label>
              <textarea className = 'formTextArea' type="text" name='' value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Can you describe as detailed as possible?"/>
            </p>
            <p>
              <label>Category</label>
              <select className = 'formSelect' onChange={(e)=>setCategory(e.target.value)} value={category}>
                <option>--Select One--</option>
                {
                  categoryData.map((data) => (
                    <option value={data.name} key={data._id}>{data.name}</option>
                  ))
                }
              </select>
              {/* <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input> */}
            </p>
            <p>
              <label>Facility</label>
              <select className = 'formSelect' onChange={(e) => setFacility(e.target.value)} value={facility}>
                <option>--Select One--</option>
                {
                  facilityData.map((data)=> (
                    <option value={data.name} key={data._id}>{data.name}</option>
                  ))
                }
              </select>
              {/* <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input> */}
            </p>
            <p>
              <label>Department</label>
                <select className = 'formSelect' onChange={(e)=>setDepartment(e.target.value)} value={department}>
                  <option>--Select One--</option>
                  {
                    departmentData.map((data) => (
                      <option value={data.name} key={data._id}>{data.name}</option>
                    ))
                  }
                </select>
            </p>
            <p>
              <label>Priority</label>
                <select className = 'formSelect' onChange={(e)=>setPriority(e.target.value)} value={priority}>
                  <option>--Select One--</option>
                  {
                    priorityData.map((data) => (
                      <option value={data.name}>{data.name}</option>
                    ))
                  }
                </select>
            </p>
            <p>
              <label>Reported by</label>
              <input className = 'formInput' type="text" name='' disabled></input>
            </p>
            {/* <p>
              <label>Responsibility</label>
              <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input>
            </p> */}
            <p>
              <label>Status</label>
                <select className = 'formSelect' onChange={(e)=>setStatus(e.target.value)} value={status}>
                {
                  statusData.map((data) => (
                    <option value={data.name}>{data.name}</option>
                  ))
                }
                </select>
            </p>
            <p>
              <label>Date Opened</label>
              {/* <input className = 'formInput' type="text" name='' value={`${format(date[0].openDate, "dd/MM/yyyy HH:mm:ss")}`} onChange={(e)=> setOpenDate(e.target.value)}  disabled> */}
              <input className = 'formInput' type="text" name='' value={`${format(openDate, "dd/MM/yyyy HH:mm:ss")}`} onChange={(e)=> setOpenDate(e.target.value)}  disabled>
              </input>
            </p>
            <p>
              {
                status === 'closed' &&
                <>
                  <label>Date Closed</label>
                  <input className = 'formInput' type="text" name='' value={`${format(new Date(), "dd/MM/yyyy HH:mm:ss")}` }  onChange={(e)=> setClosedDate(e.target.value)} disabled></input>
                  {/* <input className = 'formInput' type="text" name='' value={`${format(new Date(), "dd/MM/yyyy HH:mm:ss")}`} onChange={(e)=> setClosedDate(e.target.value)} disabled></input> */}
                </>
              }
            </p>

            <button type="submit">Create</button>
          </form>
      </div>
    </div>
  )
}

export default Create
import React from 'react'
import { useState } from 'react'
import NavBar from '../../components/navigation/NavBar'
import './create.css'

const Create = () => {

  const [issue, setIssue] = useState('');

  

  return (
    <div className='create-container'>
    <NavBar />
    
      <div className='create-form'>
          <p className='create-form-header'>Create an incidence</p>
          <form>
            <p>
              <label>Issue</label>
              <input className = 'formInput' type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)} placeholder="What's the issue?"></input>
            </p>
            <p>
              <label>Description</label>
              <textarea className = 'formTextArea' type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)} placeholder="Can you describe as detailed as possible?"/>
            </p>
            <p>
              <label>Facility</label>
              <select className = 'formSelect'>
                <option>--Select One--</option>
                <option>Ikeja - Awolowo</option>
                <option>Ikeja - Adeniyi Jones</option>
                <option>Victoria Island</option>
                <option>FABAC</option>
                <option>Ikoyi</option>
              </select>
              {/* <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input> */}
            </p>
            <p>
              <label>Department</label>
                <select className = 'formSelect'>
                  <option>--Select One--</option>
                  <option>PCS</option>
                  <option>Nursing</option>
                  <option>Billing</option>
                  <option>Pharmacy</option>
                  <option>Laboratory</option>
                  <option>Radiology</option>
                  <option>Obstetrics & Gynaecology</option>
                  <option>Inventory</option>
                </select>
            </p>
            <p>
              <label>Priority</label>
                <select className = 'formSelect'>
                  <option>--Select One--</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Immediate</option>
                  <option>Low</option>
                </select>
            </p>
            <p>
              <label>Reported by</label>
              <input className = 'formInput' type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input>
            </p>
            {/* <p>
              <label>Responsibility</label>
              <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input>
            </p> */}
            <p>
              <label>Status</label>
                <select className = 'formSelect'>
                  <option>--Select One--</option>
                  <option>Open</option>
                  <option>Closed</option>
                  <option>Delayed</option>
                </select>
            </p>
            <p>
              <label>Date Opened</label>
              <input className = 'formInput' type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input>
            </p>
            <p>
              <label>Date Closed</label>
              <input className = 'formInput' type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input>
            </p>

            <button>Create</button>
          </form>
      </div>
    </div>
  )
}

export default Create
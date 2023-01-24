import { useState } from 'react'
import NavBar from '../../components/navigation/NavBar'
import { format } from 'date-fns'//transform the dates to readable formats
import './update.css'

const Update = () => {

    const [issue, setIssue] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('Open');
    const [facility, setFacility] = useState('');
    const [department, setDepartment] = useState('');
    const [priority, setPriority] = useState('');
    const [openDate, setOpenDate] = useState(new Date());
    const [closedDate, setClosedDate] = useState(null);
    const [active, setActive] = useState('active');

  return (
    <div className='update-container'>
    <NavBar />
    
      <div className='update-form'>
          <p className='update-form-header'>Update an incidence</p>
          <form>
            <p>
              <label>Incidence</label>
              <input className = 'formInput' type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)} placeholder="What's the incidence?"></input>
            </p>
            <p>
              <label>Description</label>
              <textarea className = 'formTextArea' type="text" name='' value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Can you describe as detailed as possible?"/>
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
                <option value="EMR bugs /Incidences">EMR bugs /Incidences</option>
                <option value="CRM incidences">CRM incidences</option>
                <option value="Sage incidences">Sage incidences</option>
              </select>
              {/* <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input> */}
            </p>
            <p>
              <label>Facility</label>
              <select className = 'formSelect' onChange={(e) => setFacility(e.target.value)} value={facility}>
                <option>--Select One--</option>
                <option value="Ikeja - Awolowo">Ikeja - Awolowo</option>
                <option value="Ikeja - Adeniyi Jones">Ikeja - Adeniyi Jones</option>
                <option value="Victoria Island">Victoria Island</option>
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
              <input className = 'formInput' type="text" name='' disabled></input>
            </p>
            {/* <p>
              <label>Responsibility</label>
              <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input>
            </p> */}
            <p>
              <label>Status</label>
                <select className = 'formSelect' onChange={(e)=>setStatus(e.target.value)} value={status}>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                  <option value="delayed">Delayed</option>
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
            <p className='update-activeStatus'>
                <>
                    <input type="radio" value="active" checked={active === 'active'} name="activeLife" onChange={(e)=>setActive(e.target.value) }/>Active 
                </>
                <>
                    <input type="radio" value="inactive" checked={active === 'inactive'} name="activeLife" onChange={(e)=>setActive(e.target.value)}/>Inactive 
                </>
            </p>

            <button>Update</button>
          </form>
      </div>
    </div>
  )
}

export default Update
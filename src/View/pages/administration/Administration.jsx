import React from 'react'
import NavBar from '../../components/navigation/NavBar'
import './administration.scss'
import agent from '../../assets/images/helpdesk.png'
import key from '../../assets/images/key.png'
import team from '../../assets/images/team.png'
import reset from '../../assets/images/reset.png'
import sla from '../../assets/images/sla.png'
import facility from '../../assets/images/facility.png'
import department from '../../assets/images/hierarchy.png'
import category from '../../assets/images/categorization.png'
import priority from '../../assets/images/prioritize.png'
import email from '../../assets/images/email.png'
import book from '../../assets/images/book.png'

const Administration = () => {
  return (
    <div className='administration-container'>
        <NavBar />

        {/* Administration Page */}
        <div className='administration-header'>
          Administration
        </div>

        <div className="administration-wrapper">

          <div className="administration-group-header">
            <p>USERS</p>
            <p>Control your Agents, Team, and Privileges</p>
          </div>
          <div className="administration-group">
            <div className="user-item">
              <div><img className="user-item-icon" src={agent} alt='Agent icon' /></div>
              <div className="user-item-caption">Agent</div>
            </div>
            <div className="user-item">
              <div><img className="user-item-icon" src={team} alt='Agent icon' /></div>
              <div className="user-item-caption">Team</div>
            </div>
            <div className="user-item">
              <div><img className="user-item-icon" src={key} alt='Agent icon' /></div>
              <div className="user-item-caption">Privileges</div>
            </div>
            <div className="user-item">
              <div><img className="user-item-icon" src={reset} alt='Agent icon' /></div>
              <div className="user-item-caption">Password Reset</div>
            </div>
            <div className="user-item">
              <div><img className="user-item-icon" src={sla} alt='Agent icon' /></div>
              <div className="user-item-caption">Service Level Agreement</div>
            </div>
          </div>
          <div className="administration-group-header">
            <p>FACILITY</p>
            <p>Control your Agents, Team, and Privileges</p>
          </div>
          <div className="administration-group">
            <div className="user-item">
              <div><img className="user-item-icon" src={facility} alt='Agent icon' /></div>
              <div className="user-item-caption">Facility</div>
            </div>
            <div className="user-item">
              <div><img className="user-item-icon" src={department} alt='Agent icon' /></div>
              <div className="user-item-caption">Department</div>
            </div>
            <div className="user-item">
              <div><img className="user-item-icon" src={category} alt='Agent icon' /></div>
              <div className="user-item-caption">Category</div>
            </div>
            <div className="user-item">
              <div><img className="user-item-icon" src={priority} alt='Agent icon' /></div>
              <div className="user-item-caption">Priority</div>
            </div>
          </div>
          <div className="administration-group-header">
            <p>PRODUCTIVITY</p>
            <p>Automate your processes by creating set of rules or presets to respond faster to the tickets.</p>
          </div>
          <div className="administration-group">
            <div className="user-item">
              <div><img className="user-item-icon" src={email} alt='Agent icon' /></div>
              <div className="user-item-caption">Email Templates</div>
            </div>
          </div>
          <div className="administration-group-header">
            <p>KNOWLEDGEBASE</p>
            <p>Knowledgebase is a source of rigid and complex information which helps Customers to help themselves.</p>
          </div>
          <div className="administration-group">
            <div className="user-item">
              <div><img className="user-item-icon" src={book} alt='Agent icon' /></div>
              <div className="user-item-caption">Articles</div>
            </div>
          </div>


        </div>


        
    </div>
  )
}

export default Administration
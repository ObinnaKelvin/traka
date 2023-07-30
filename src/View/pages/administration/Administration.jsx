import React from 'react'
import NavBar from '../../components/navigation/NavBar'
import './administration.scss'
import agent from '../../assets/images/helpdesk.png'
import key from '../../assets/images/key.png'
import team from '../../assets/images/team.png'
import reset from '../../assets/images/reset.png'
import change from '../../assets/images/change.png'
import sla from '../../assets/images/sla.png'
import facility from '../../assets/images/facility.png'
import department from '../../assets/images/hierarchy.png'
import category from '../../assets/images/categorization.png'
import priority from '../../assets/images/prioritize.png'
import email from '../../assets/images/email.png'
import book from '../../assets/images/book.png'
import { Link } from 'react-router-dom';

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
              <Link className='link' to ="/administration/agent">
                <div><img className="user-item-icon" src={agent} alt='Agent icon' /></div>
                <div className="user-item-caption">Agent</div>
              </Link>
            </div>
            <div className="user-item">
              <Link className='link' to ="/administration/team">
              <div><img className="user-item-icon" src={team} alt='Agent icon' /></div>
              <div className="user-item-caption">Team</div>
              </Link>
            </div>
            <div className="user-item">
              <Link className='link' to ="/administration/privilege">
                <div><img className="user-item-icon" src={key} alt='Agent icon' /></div>
                <div className="user-item-caption">Privileges</div>
              </Link>
            </div>
            <div className="user-item">
              <Link className='link' to ="/administration/password-reset">
                <div><img className="user-item-icon" src={reset} alt='Agent icon' /></div>
                <div className="user-item-caption">Password Reset</div>
              </Link>
            </div>
            <div className="user-item">
              <Link className='link' to ="/administration/sla">
                <div><img className="user-item-icon" src={sla} alt='Agent icon' /></div>
                <div className="user-item-caption">Service Level Agreement</div>
              </Link>
            </div>
            <div className="user-item">
              <Link className='link' to ="/administration/sla">
                <div><img className="user-item-icon" src={change} alt='Agent icon' /></div>
                <div className="user-item-caption">Password Change</div>
              </Link>
            </div>
          </div>
          <div className="administration-group-header">
            <p>ORGANIZATION</p>
            <p>Control the creation of new Facilities, Departments, Categories and Priority</p>
          </div>
          <div className="administration-group">
            <div className="user-item">
              <Link className='link' to ="/administration/facility">
                <div><img className="user-item-icon" src={facility} alt='Agent icon' /></div>
                <div className="user-item-caption">Facility</div>
              </Link>
            </div>
            <div className="user-item">
              <Link className='link' to ="/administration/department">
                <div><img className="user-item-icon" src={department} alt='Agent icon' /></div>
                <div className="user-item-caption">Department</div>
              </Link>
            </div>
            <div className="user-item">
              <Link className='link' to ="/administration/category">
                <div><img className="user-item-icon" src={category} alt='Agent icon' /></div>
                <div className="user-item-caption">Category</div>
              </Link>
            </div>
            <div className="user-item">
              <Link className='link' to ="/administration/priority">
                <div><img className="user-item-icon" src={priority} alt='Agent icon' /></div>
                <div className="user-item-caption">Priority</div>
              </Link>
            </div>
          </div>
          <div className="administration-group-header">
            <p>PRODUCTIVITY</p>
            <p>Automate your processes by creating set of rules or presets to respond faster to the tickets.</p>
          </div>
          <div className="administration-group">
            <div className="user-item">
              <Link className='link' to ="/administration/email-templates">
                <div><img className="user-item-icon" src={email} alt='Agent icon' /></div>
                <div className="user-item-caption">Email Templates</div>
              </Link>
            </div>
          </div>
          <div className="administration-group-header">
            <p>KNOWLEDGEBASE</p>
            <p>Knowledgebase is a source of rigid and complex information which helps Customers to help themselves.</p>
          </div>
          <div className="administration-group">
            <div className="user-item">
              <Link className='link' to ="/administration/articles">
                <div><img className="user-item-icon" src={book} alt='Agent icon' /></div>
                <div className="user-item-caption">Articles</div>
              </Link>
            </div>
          </div>


        </div>


        
    </div>
  )
}

export default Administration
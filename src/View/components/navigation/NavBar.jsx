import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug, faChartLine, faComments, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'; 
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
    console.log(open)
  }

  return (
    <div className='navBar'>
        <div className="navBar-header">
            <div className="navBar-header-logo">
                traka
            </div>
            {/* <Hamburger /> */}
            <div className="hamburger" onClick={toggle}>
                <span className="hamOne"></span>
                <span className="hamTwo"></span>
                <span className="hamThree"></span>
            </div>
        </div>
        <div className={open ? 'navBar-sideBar open' : 'navBar-sideBar'}>
            <ul>
              <li>
                <Link to ="/dashboard">
                  <span><FontAwesomeIcon icon={faChartLine}/></span>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <span><FontAwesomeIcon icon={faBug}/></span>
                <span>Incidences</span>
              </li>
              <li>
                <span><FontAwesomeIcon icon={faPeopleGroup}/></span>
                <span>Team</span>
              </li>
              <li>
                <span><FontAwesomeIcon icon={faComments}/></span>
                <span>Chatbox</span>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar